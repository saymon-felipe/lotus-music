<template>
  <headerComponent></headerComponent>

  <main>
    <heroComponent></heroComponent>
  </main>

  <footerComponent></footerComponent>

  <FloatingNotesBackground class="animated-show" />
</template>
<script>
import headerComponent from '../components/headerComponent.vue'
import heroComponent from '../components/heroComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import FloatingNotesBackground from '../components/FloatingNotesBackground.vue'

export default {
  components: {
    headerComponent,
    heroComponent,
    footerComponent,
    FloatingNotesBackground,
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
main,
header,
footer {
  position: relative;
  z-index: 1;
}
</style>
