<template>
  <section id="processo_seletivo">
    <div class="container">
      <div class="section-title">
        <h2>
          Caminho da Excelência: <br />
          <span class="highlight">Processo Seletivo Lótus Music</span>
        </h2>
      </div>
      <div class="section-container">
        <div class="requirements">
          <div class="title">
            <font-awesome-icon icon="fa-star" />
            <p>Pré-Requisitos</p>
          </div>
          <div class="card vertical">
            <ul>
              <li>
                <font-awesome-icon icon="fa-circle-check" />
                <span
                  >Paixão pela Música: Demonstre seu amor e ambição em evoluir musicalmente.</span
                >
              </li>
              <li>
                <font-awesome-icon icon="fa-circle-check" />
                <span
                  >Fundamentos básicos: Possua conhecimento básico de música, ou pelo menos uma
                  noção.</span
                >
              </li>
              <li>
                <font-awesome-icon icon="fa-circle-check" />
                <span>Comprometimento: Dedique-se de verdade ao seu desenvolvimento.</span>
              </li>
              <li>
                <font-awesome-icon icon="fa-circle-check" />
                <span
                  >Instrumento Próprio: Tenha seu próprio instrumento para as aulas. Ou almeje
                  adquirir um.</span
                >
              </li>
              <li>
                <font-awesome-icon icon="fa-circle-check" />
                <span>Visão de Futuro: Busque alcançar a excelência em performance.</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="selection-process">
          <div class="title">
            <font-awesome-icon icon="fa-book-open" />
            <p>Processo Seletivo</p>
          </div>
          <div class="steps">
            <div class="card">
              <div class="icon">
                <font-awesome-icon icon="fa-id-card" />
              </div>
              <div class="text">
                <p>Inscrição Exclusiva</p>
                <span
                  >Preencha nosso formulário compartilhando sua jornada e ambições musicais</span
                >
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <font-awesome-icon icon="fa-magnifying-glass-chart" />
              </div>
              <div class="text">
                <p>Análise de Talento</p>
                <span
                  >Seu perfil será avaliado para garantir o alinhamento com a metodologia Lótus
                  Music</span
                >
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <font-awesome-icon icon="fa-comments" />
              </div>
              <div class="text">
                <p>Entrevista Seletiva</p>
                <span
                  >Uma conversa de perto para alinharmos suas expectativas com o nosso ensino</span
                >
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <font-awesome-icon icon="fa-music" />
              </div>
              <div class="text">
                <p>Avaliação Prática</p>
                <span
                  >Demonstre seu potencial em uma sessão prática, onde avaliaremos seu nível e
                  aptidão</span
                >
              </div>
            </div>
            <div class="card">
              <div class="icon">
                <font-awesome-icon icon="fa-door-open" />
              </div>
              <div class="text">
                <p>Boas-Vindas</p>
                <span
                  >Após a aprovação, você receberá as diretrizes e terá acesso imediato à nossa
                  comunidade</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
.section-container {
  gap: var(--space-16);
}

.requirements,
.selection-process {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  & .title {
    display: flex;
    align-items: center;
    gap: var(--space-5);

    & svg {
      font-size: 1.5rem;
    }

    & p {
      font-size: var(--fontsize-lg);
      font-weight: bold;
    }
  }
}

.selection-process {
  & .steps {
    display: grid;
    gap: var(--space-6);
    padding-left: 2.8rem;
  }

  & .card {
    display: flex;
    align-items: center;
    gap: var(--space-6);
    position: relative;

    &::before {
      content: '';
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: var(--yellow-2);
      position: absolute;
      left: -2.4rem;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    &::after {
      content: '';
      width: 7px;
      height: 120%;
      background: rgba(253, 215, 98, 0.3);
      position: absolute;
      top: 50%;
      left: -2.18rem;
    }

    &:last-child::after {
      display: none;
    }

    & .icon {
      font-size: 1.5rem;
      display: grid;
      place-items: center;
      width: 50px;
      height: 50px;
      min-width: 50px;
      min-height: 50px;
      max-width: 50px;
      max-height: 50px;
      background: var(--yellow-2);
      border-radius: 50%;
      color: var(--black);
    }

    & .text {
      & p {
        font-size: var(--fontsize-md);
        font-weight: bold;
      }

      & span {
        font-size: var(--fontsize-sm);
      }
    }
  }
}
</style>
