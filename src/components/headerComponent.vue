<template>
  <header class="prevent-flicker" v-scroll-reveal="{ delay: 500, origin: 'bottom' }">
    <nav class="container" ref="wrapper">
      <font-awesome-icon
        icon="fa-bars"
        class="resonsive-menu-icon"
        @click="showResponsiveHeader = !showResponsiveHeader"
      />
      <div class="menu-inner" :class="{ show: showResponsiveHeader }">
        <div class="header-left-content">
          <div class="menu-item" title="Início" @click="anchor('inicio')">
            <font-awesome-icon icon="fa-music" />
            <span>Início</span>
          </div>
          <div class="menu-item" title="Modalidades" @click="anchor('modalidades')">
            <font-awesome-icon icon="fa-users" />
            <span>Modalidades</span>
          </div>
        </div>
        <img src="../assets/img/logo-transparente.webp" alt="Lótus Music" />
        <div class="header-right-content">
          <div class="menu-item" title="Pacotes" @click="anchor('pacotes')">
            <font-awesome-icon icon="fa-dollar-sign" />
            <span>Pacotes</span>
          </div>
          <div class="menu-item" title="Processo Seletivo" @click="anchor('processo_seletivo')">
            <font-awesome-icon icon="fa-graduation-cap" />
            <span>Processo Seletivo</span>
          </div>
        </div>
        <div class="signature">
          <span>© {{ year }} - Lótus Music. Todos os direitos reservados.</span>
          <span
            >Site criado por
            <a href="https://kineticsolutions.com.br?utm_source=lotus-music" target="_blank"
              >KSI - Kinetic Solutions</a
            ></span
          >
        </div>
      </div>
    </nav>
    <button class="btn btn-primary header-cta-btn" type="button">Agendar Aula</button>
  </header>
</template>
<script>
export default {
  data() {
    return {
      showResponsiveHeader: false,
      year: new Date().getFullYear(),
    }
  },
  methods: {
    fecharAoClicarFora(event) {
      if (
        this.showResponsiveHeader &&
        this.$refs.wrapper &&
        !this.$refs.wrapper.contains(event.target)
      ) {
        this.showResponsiveHeader = false
      }
    },
    anchor: function (target) {
      this.showResponsiveHeader = false

      document.getElementById(target).scrollIntoView({ behavior: 'smooth' })
    },
    handleBackButton() {
      if (this.isMobile() && this.showResponsiveHeader) {
        this.showResponsiveHeader = !this.showResponsiveHeader
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.fecharAoClicarFora)

    window.history.pushState(null, '', window.location.href)

    window.addEventListener('popstate', () => {
      this.handleBackButton()
      window.history.pushState(null, '', window.location.href)
    })
  },
  beforeUnmount() {
    document.removeEventListener('click', this.fecharAoClicarFora)
  },
}
</script>
<style scoped>
header {
  border-bottom: 1px solid #2f4e3f;
  background: linear-gradient(to top left, var(--black), var(--black-2));
  position: relative;
  height: 86.36px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100dvw;
  padding-bottom: 1px;
  z-index: 3 !important;

  & .container {
    display: flex;
    justify-content: center;
  }

  & .menu-inner {
    position: relative;
  }

  & nav {
    display: flex;
    align-items: center;
    gap: var(--space-6);
    background: linear-gradient(to top left, var(--black), var(--black-2));
    padding: var(--space-6);
    height: 85.36px;
  }

  & .menu-item {
    display: flex;
    align-items: center;
    gap: var(--space-3);
    cursor: pointer;
    white-space: nowrap;
  }

  & img {
    margin-left: 5rem;
    margin-right: 5rem;
    width: calc(5dvw + 5rem);
    max-width: 150px;
  }

  & span {
    font-size: var(--fontsize-md);
  }

  & svg {
    font-size: 1.3rem;
  }

  & span,
  & svg {
    color: var(--yellow-3);
  }
}

.signature {
  display: none;
}

.resonsive-menu-icon {
  display: none;
  position: absolute;
  left: var(--space-6);
  top: 0;
  bottom: 0;
  margin: auto;
  height: fit-content;
  font-size: 1.5rem !important;
  width: 1.5rem !important;
  color: var(--yellow-2);
  cursor: pointer;
}

.header-left-content,
.header-right-content {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  align-items: center;
  gap: 5rem;
}

.header-left-content {
  right: 100%;
}

.header-right-content {
  left: 100%;
}

.header-cta-btn {
  position: absolute;
  right: var(--space-6);
  top: 0;
  bottom: 0;
  margin: auto;
}

@media (max-width: 1400px) {
  .menu-item {
    flex-direction: column;
  }
}

@media (max-width: 1250px) {
  .menu-item span {
    display: none;
  }
}

@media (max-width: 926px) {
  .resonsive-menu-icon {
    display: block;
  }

  .menu-inner {
    width: 40dvw;
    height: 100dvh;
    position: fixed !important;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-6);
    padding: var(--space-6);
    border-left: 1px solid #2f4e3f;
    transition: all 0.4s ease-in-out;
    transform: translateX(100dvw);
    opacity: 0;
    background: linear-gradient(to top left, var(--black), var(--black-2));
    z-index: 999;
    min-width: 320px;

    & .signature {
      display: block;
    }

    &.show {
      opacity: 1;
      transform: translateX(0);
    }

    & img {
      order: 1;
      margin: 0 !important;
      margin-bottom: 1rem !important;
    }

    & .header-left-content {
      order: 2;
    }

    & .header-right-content {
      order: 3;
    }

    & .header-left-content,
    & .header-right-content {
      height: fit-content;
      display: grid;
      gap: var(--space-5);

      & .menu-item {
        flex-direction: row;
        justify-content: center;

        & span {
          display: block;
        }
      }
    }
  }

  .header-left-content,
  .header-right-content {
    position: relative;
    right: initial;
    left: initial;
    margin: initial;
  }
}
</style>
