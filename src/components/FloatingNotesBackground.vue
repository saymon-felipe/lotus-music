<template>
  <div class="background-canvas" ref="canvasContainer"></div>
</template>

<script>
import * as THREE from 'three'

import note1 from '../assets/img/notas-musicais/1.png'
import note2 from '../assets/img/notas-musicais/2.png'
import note3 from '../assets/img/notas-musicais/3.png'
import note4 from '../assets/img/notas-musicais/4.png'
import note5 from '../assets/img/notas-musicais/5.png'
import note6 from '../assets/img/notas-musicais/6.png'

export default {
  name: 'FloatingNotesBackground',
  mounted() {
    this.init()
  },
  beforeUnmount() {
    this.cleanup()
  },
  methods: {
    isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    },

    init() {
      this.camera = null
      this.scene = new THREE.Scene()
      this.renderer = null
      this.notes = []
      this.mouse = new THREE.Vector2()
      this.raycaster = new THREE.Raycaster()
      this.mousePlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0)
      this.mousePosition3D = new THREE.Vector3()
      this.clock = new THREE.Clock()
      this.particlePool = []
      this.particleCursor = 0

      const container = this.$refs.canvasContainer
      if (!container) return

      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000,
      )
      this.camera.position.z = 15

      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.renderer.setSize(window.innerWidth, window.innerHeight)
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      container.appendChild(this.renderer.domElement)
      this.createMusicalNotes()
      this.createParticlePool()

      if (this.isMobile()) {
        this.cameraBasePosition = new THREE.Vector3().copy(this.camera.position)
        this.cameraOffset = new THREE.Vector3()
        this.cameraTargetOffset = new THREE.Vector3()

        if (
          typeof DeviceOrientationEvent !== 'undefined' &&
          typeof DeviceOrientationEvent.requestPermission === 'function'
        ) {
          this.showPermissionButton = true
        } else {
          window.addEventListener('deviceorientation', this.onDeviceOrientation)
        }
      } else {
        window.addEventListener('mousemove', this.onMouseMove)
      }

      window.addEventListener('resize', this.onWindowResize)
      this.animate()
    },

    createParticlePool() {
      const particleGeometry = new THREE.PlaneGeometry(0.1, 0.1)
      const particleMaterial = new THREE.MeshBasicMaterial({
        color: 0xffecb3,
        transparent: true,
        opacity: 1,
        side: THREE.DoubleSide,
      })

      for (let i = 0; i < 150; i++) {
        const particle = new THREE.Mesh(particleGeometry, particleMaterial)
        particle.visible = false
        particle.userData = {
          isActive: false,
          lifetime: 0,
          velocity: new THREE.Vector3(),
        }
        this.particlePool.push(particle)
        this.scene.add(particle)
      }
    },

    createMusicalNotes() {
      const textureLoader = new THREE.TextureLoader()
      const noteImageUrls = [note1, note2, note3, note4, note5, note6]
      const textures = noteImageUrls.map((url) => textureLoader.load(url))
      const geometry = new THREE.PlaneGeometry(1, 1)

      for (let i = 0; i < 100; i++) {
        const texture = textures[Math.floor(Math.random() * textures.length)]
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true,
          opacity: Math.random() * 0.3 + 0.1,
          side: THREE.DoubleSide,
          alphaTest: 0.01,
        })
        const note = new THREE.Mesh(geometry, material)

        const scale = Math.random() * 1.5 + 0.5
        note.scale.set(scale, scale, scale)

        note.userData = {
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01,
          ),
          originalScale: new THREE.Vector3().copy(note.scale),
          targetOpacity: material.opacity,
          state: 'normal',
          shakeTime: 0,
          floatFrequency: Math.random() * 0.5 + 0.1,
          floatAmplitude: Math.random() * 0.2 + 0.1,
          floatPhaseOffset: Math.random() * Math.PI * 2,
        }

        note.position.set(
          (Math.random() - 0.5) * 60,
          (Math.random() - 0.5) * 50,
          (Math.random() - 0.5) * 20,
        )
        note.rotation.z = Math.random() * Math.PI * 2

        this.notes.push(note)
        this.scene.add(note)
      }
    },

    triggerExplosion(position) {
      const particleCount = 5
      for (let i = 0; i < particleCount; i++) {
        const particle = this.particlePool[this.particleCursor]

        particle.visible = true
        particle.position.copy(position)
        particle.userData.isActive = true
        particle.userData.lifetime = Math.random() * 0.5 + 0.2
        particle.userData.velocity.set(
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
          (Math.random() - 0.5) * 0.1,
        )

        this.particleCursor = (this.particleCursor + 1) % this.particlePool.length
      }
    },

    resetNote(note) {
      note.position.set(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 40,
        (Math.random() - 0.5) * 20,
      )
      note.userData.velocity.set(
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
        (Math.random() - 0.5) * 0.01,
      )
      note.userData.state = 'normal'
      note.userData.shakeTime = 0
      note.scale.copy(note.userData.originalScale)
      note.material.opacity = 0
    },

    onDeviceOrientation(event) {
      if (!event.gamma || !event.beta) return

      const maxTilt = 25
      const maxOffset = 2.5
      const gamma = Math.max(-maxTilt, Math.min(maxTilt, event.gamma)) / maxTilt
      const beta = Math.max(-maxTilt, Math.min(maxTilt, event.beta - 45)) / maxTilt

      this.cameraTargetOffset.x = -gamma * maxOffset
      this.cameraTargetOffset.y = beta * maxOffset
    },

    onWindowResize() {
      if (!this.renderer) return
      this.camera.aspect = window.innerWidth / window.innerHeight
      this.camera.updateProjectionMatrix()
      this.renderer.setSize(window.innerWidth, window.innerHeight)
    },

    onMouseMove(event) {
      this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1
      this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
      this.raycaster.setFromCamera(this.mouse, this.camera)
      this.raycaster.ray.intersectPlane(this.mousePlane, this.mousePosition3D)
    },

    animate() {
      this.animationFrameId = requestAnimationFrame(this.animate)
      const delta = this.clock.getDelta()
      const elapsedTime = this.clock.getElapsedTime()

      const bounds = { x: 30, y: 25, z: 10 }
      const eventHorizonRadius = 1.5
      const influenceRadius = 6.0
      const shakeToExplodeTime = 0.75

      this.notes.forEach((note) => {
        const distanceToMouse = note.position.distanceTo(this.mousePosition3D)

        if (distanceToMouse < eventHorizonRadius && note.userData.state === 'normal') {
          note.userData.state = 'shaking'
          note.userData.shakeTime = 0
        } else if (distanceToMouse >= eventHorizonRadius && note.userData.state === 'shaking') {
          note.userData.state = 'normal'
          note.scale.copy(note.userData.originalScale)
        }

        if (note.userData.state === 'shaking') {
          note.userData.shakeTime += delta
          note.position.x += (Math.random() - 0.5) * 0.1
          note.position.y += (Math.random() - 0.5) * 0.1
          const pulse = 1 + Math.sin(note.userData.shakeTime * 20) * 0.1
          note.scale.copy(note.userData.originalScale).multiplyScalar(pulse)

          if (note.userData.shakeTime > shakeToExplodeTime) {
            this.triggerExplosion(note.position)
            this.resetNote(note)
          }
        } else {
          const notePosition2D = new THREE.Vector2(note.position.x, note.position.y)
          const mousePosition2D = new THREE.Vector2(this.mousePosition3D.x, this.mousePosition3D.y)
          const distanceToMouse2D = notePosition2D.distanceTo(mousePosition2D)

          if (!this.isMobile() && distanceToMouse2D < influenceRadius) {
            const targetPosition = new THREE.Vector3(
              this.mousePosition3D.x,
              this.mousePosition3D.y,
              note.position.z,
            )
            const forceDirection = new THREE.Vector3()
              .subVectors(targetPosition, note.position)
              .normalize()
            const forceMagnitude = (influenceRadius - distanceToMouse2D) * 0.0004
            note.userData.velocity.add(forceDirection.multiplyScalar(forceMagnitude))
          }

          const floatForce = new THREE.Vector3(
            Math.cos(elapsedTime * note.userData.floatFrequency + note.userData.floatPhaseOffset) *
              note.userData.floatAmplitude,
            Math.sin(
              elapsedTime * note.userData.floatFrequency + note.userData.floatPhaseOffset * 1.2,
            ) * note.userData.floatAmplitude,
            0,
          )

          note.userData.velocity.add(floatForce.multiplyScalar(0.0005))
          note.position.add(note.userData.velocity)

          if (note.position.x > bounds.x || note.position.x < -bounds.x)
            note.userData.velocity.x *= -1
          if (note.position.y > bounds.y || note.position.y < -bounds.y)
            note.userData.velocity.y *= -1
          if (note.position.z > bounds.z || note.position.z < -bounds.z)
            note.userData.velocity.z *= -1

          note.userData.velocity.multiplyScalar(0.995)

          if (note.material.opacity < note.userData.targetOpacity) {
            note.material.opacity += 0.01
          }
        }

        note.rotation.z += note.userData.velocity.x * 0.05
        note.rotation.y += note.userData.velocity.y * 0.05
      })

      this.particlePool.forEach((particle) => {
        if (particle.userData.isActive) {
          particle.position.add(particle.userData.velocity)
          particle.userData.lifetime -= delta
          particle.material.opacity = particle.userData.lifetime * 2

          if (particle.userData.lifetime <= 0) {
            particle.userData.isActive = false
            particle.visible = false
          }
        }
      })

      if (this.isMobile()) {
        this.cameraOffset.lerp(this.cameraTargetOffset, 0.05)
        this.camera.position.x = this.cameraBasePosition.x + this.cameraOffset.x
        this.camera.position.y = this.cameraBasePosition.y + this.cameraOffset.y
      }

      if (this.renderer) {
        this.renderer.render(this.scene, this.camera)
      }
    },

    cleanup() {
      cancelAnimationFrame(this.animationFrameId)
      window.removeEventListener('resize', this.onWindowResize)

      if (this.isMobile()) {
        window.removeEventListener('deviceorientation', this.onDeviceOrientation, true)
      } else {
        window.removeEventListener('mousemove', this.onMouseMove)
      }

      if (this.scene) {
        this.scene.traverse((object) => {
          if (object.geometry) object.geometry.dispose()
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach((material) => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        })
      }

      if (this.renderer) {
        this.renderer.dispose()
        const container = this.$refs.canvasContainer
        if (container && this.renderer.domElement) {
          container.removeChild(this.renderer.domElement)
        }
      }
    },
  },
}
</script>

<style scoped>
.background-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
  z-index: 0;
  overflow: hidden;
}
</style>
