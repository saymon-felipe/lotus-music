<template>
  <section id="formats">
    <div class="container">
      <div
        class="section-title"
        v-scroll-reveal="{ delay: 400, origin: 'bottom', container: 'main' }"
      >
        <h2>Formatos de Aula</h2>
        <p>Cada formato oferece vantagens únicas para seu aprendizado.</p>
      </div>
      <div
        class="section-container"
        v-scroll-reveal="{ delay: 700, origin: 'bottom', container: 'main' }"
      >
        <div class="card vertical">
          <div class="card-header">
            <div class="card-icon">
              <font-awesome-icon icon="fa-user" />
            </div>
            <p>Aulas individuais</p>
            <span>Atenção 100% personalizada para você</span>
          </div>
          <ul>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Ritmo adaptado ao seu perfil</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Correção imediata de técnicas</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Repertório personalizado</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Flexibilidade de horários</span>
            </li>
          </ul>
          <button type="button" class="btn btn-primary-alt">Escolher Formato</button>
        </div>
        <div class="card vertical emphasis recommended" data-title="Recomendado">
          <div class="card-header">
            <div class="card-icon">
              <font-awesome-icon icon="fa-users" />
            </div>
            <p>Aulas em Grupo</p>
            <span>Aprenda em conjunto e desenvolva habilidades colaborativas</span>
          </div>
          <ul>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Experiência musical coletiva</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Motivação através da interação</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Custo-benefício otimizado</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Desenvolvimento de ensemble</span>
            </li>
          </ul>
          <button type="button" class="btn btn-primary-alt">Escolher Formato</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
