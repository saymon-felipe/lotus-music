<template>
  <section id="inicio">
    <div class="container">
      <div class="hero-texts float">
        <h1
          class="prevent-flicker"
          v-scroll-reveal="{ delay: 200, origin: 'bottom', container: 'main' }"
        >
          Desperte seu <span class="highlight">Talento Musical</span>
        </h1>
        <h4
          class="prevent-flicker"
          v-scroll-reveal="{ delay: 300, origin: 'bottom', container: 'main' }"
        >
          Na Lótus Music, transformamos paixão em técnica através de aulas presenciais e remotas,
          individuais ou em grupo, com os melhores professores.
        </h4>
      </div>
      <div
        class="hero-utils prevent-flicker"
        v-scroll-reveal="{ delay: 700, origin: 'bottom', container: 'main' }"
      >
        <div class="hero-metrics">
          <div class="metric">
            <font-awesome-icon icon="fa-star" />
            <div class="metric-text">
              <p>4.9</p>
              <span>Avaliação</span>
            </div>
          </div>
          <div class="metric">
            <font-awesome-icon icon="fa-users" />
            <div class="metric-text">
              <p>1000+</p>
              <span>Alunos</span>
            </div>
          </div>
          <div class="metric">
            <font-awesome-icon icon="fa-calendar" />
            <div class="metric-text">
              <p>10+</p>
              <span>Anos</span>
            </div>
          </div>
        </div>
        <div class="hero-buttons">
          <button class="btn btn-primary attention">
            <font-awesome-icon icon="fa-play" />
            Agendar Aula Gratuita
          </button>
          <button class="btn btn-primary-alt">Conhecer Modalidades</button>
        </div>
        <div class="informative-button">
          🎵 Primeira aula gratuita + 20% de desconto na matrícula
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
#inicio {
  & .container {
    max-width: 860px;
    text-align: center;
    padding-bottom: var(--space-12);

    & h1 {
      max-width: 699px;
    }

    & .hero-metrics {
      display: flex;
      align-items: center;
      gap: var(--space-8);

      & .metric {
        width: 100px;
        color: var(--yellow-2);

        & svg {
          margin-bottom: var(--space-3);
        }

        & svg,
        & p {
          font-size: var(--fontsize-lg);
          font-weight: 600;
        }

        & span {
          font-size: var(--fontsize-md);
        }
      }
    }

    & .hero-buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: var(--space-6);
      flex-wrap: wrap;
      width: 100%;

      & button {
        width: 1005;
      }
    }
  }
}

.hero-utils {
  display: grid;
  place-items: center;
  gap: var(--space-12);
}

.hero-texts {
  display: grid;
  place-items: center;
  gap: var(--space-6);
}

@media (max-width: 768px) {
  .hero-metrics {
    gap: 0 !important;

    /*& svg,
    & p {
      font-size: var(--fontsize-md) !important;
    }

    & span {
      font-size: var(--fontsize-sm) !important;
    }*/
  }
}
</style>
