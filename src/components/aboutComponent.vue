<template>
  <section id="about">
    <div class="container">
      <div
        class="section-title"
        v-scroll-reveal="{ delay: 400, origin: 'bottom', container: 'main' }"
      >
        <h2>Por que escolher a <span class="highlight">Lótus Music?</span></h2>
        <p>
          Oferecemos uma experiência única de ensino musical com benefícios que fazem a diferença no
          aprendizado.
        </p>
      </div>
      <div
        class="section-container"
        v-scroll-reveal="{ delay: 700, origin: 'bottom', container: 'main' }"
      >
        <div class="card">
          <div class="card-header">
            <div class="card-icon">
              <font-awesome-icon icon="fa-music" />
            </div>
            <p>Metodologia Exclusiva</p>
          </div>
          <p>
            Sistema pedagógico desenvolvido especialmente para acelerar seu aprendizado musical.
          </p>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-icon">
              <font-awesome-icon icon="fa-medal" />
            </div>
            <p>Professores Especialistas</p>
          </div>
          <p>Equipe formada por músicos profissionais com vasta experiência em ensino.</p>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-icon">
              <font-awesome-icon icon="fa-clock" />
            </div>
            <p>Horários Flexíveis</p>
          </div>
          <p>Aulas que se adaptam à sua rotina, com horários personalizados.</p>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-icon">
              <font-awesome-icon icon="fa-check" />
            </div>
            <p>Certificação Reconhecida</p>
          </div>
          <p>Certificados validados que comprovam seu desenvolvimento musical.</p>
        </div>
        <div class="card">
          <div class="card-header">
            <div class="card-icon">
              <font-awesome-icon icon="fa-book-open" />
            </div>
            <p>Material Didático</p>
          </div>
          <p>Apostilas e recursos digitais exclusivos inclusos no curso.</p>
        </div>
      </div>
      <div
        class="card emphasis big"
        v-scroll-reveal="{ delay: 400, origin: 'bottom', container: 'main' }"
      >
        <p class="card-title highlight">Benefícios Exclusivos</p>
        <ul>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Acompanhamento personalizado do progresso</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Suporte 24/7</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Desconto em instrumentos parceiros</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Participação em recitais e eventos</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Reposição de aulas garantida</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Desconto em pacote por indicação</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
