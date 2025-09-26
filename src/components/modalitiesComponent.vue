<template>
  <section id="modalidades">
    <div class="container">
      <div
        class="section-title"
        v-scroll-reveal="{ delay: 400, origin: 'bottom', container: 'main' }"
      >
        <h2>Modalidades de Ensino</h2>
        <p>Escolha a modalidade que melhor se adapta ao seu estilo de vida e objetivos musicais.</p>
      </div>
      <div
        class="section-container"
        v-scroll-reveal="{ delay: 700, origin: 'bottom', container: 'main' }"
      >
        <div class="card vertical">
          <div class="card-header">
            <div class="card-icon">
              <font-awesome-icon icon="fa-location-dot" />
            </div>
            <p>Aulas Presenciais</p>
            <span>Interação direta com o professor em nossa escola equipada</span>
          </div>
          <ul>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Contato direto com instrumentos profissionais</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Networking com outros alunos</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Ambiente inspirador e focado</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Acesso completo à infraestrutura</span>
            </li>
          </ul>
          <button type="button" class="btn btn-primary">Saiba Mais</button>
        </div>
        <div class="card vertical emphasis recommended" data-title="Mais Popular">
          <div class="card-header">
            <div class="card-icon">
              <font-awesome-icon icon="fa-desktop" />
            </div>
            <p>Aulas Online</p>
            <span>Aprenda no conforto da sua casa com tecnologia de ponta</span>
          </div>
          <ul>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Flexibilidade total de horários</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Plataforma interativa</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Gravação das aulas incluída</span>
            </li>
            <li>
              <font-awesome-icon icon="fa-circle-check" />
              <span>Suporte técnico 24/7</span>
            </li>
          </ul>
          <button type="button" class="btn btn-primary">Saiba Mais</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {}
</script>
