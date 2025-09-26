<template>
  <section id="pacotes">
    <div class="container">
      <div
        class="section-title"
        v-scroll-reveal="{ delay: 200, origin: 'bottom', container: 'main' }"
      >
        <h2 class="highlight">Planos e Preços</h2>
        <p>Investimento justo para uma educação musical de qualidade excepcional.</p>
        <div class="gift">🎁 Primeira aula gratuita para novos alunos!</div>
      </div>
      <div
        class="section-container"
        v-scroll-reveal="{ delay: 500, origin: 'bottom', container: 'main' }"
      >
        <div class="card vertical">
          <div class="card-header">
            <div class="card-icon">
              <span>🎵</span>
            </div>
            <p>Pacote Família</p>
            <span>2 ou mais alunos da mesma família</span>
          </div>
          <div class="discount">25% OFF</div>
          <p>Desconto progressivo: 2º aluno 15% OFF, 3º aluno 25% OFF</p>
        </div>
        <div class="card vertical">
          <div class="card-header">
            <div class="card-icon">
              <span>🎵</span>
            </div>
            <p>Pacote Semestral</p>
            <span>Pagamento antecipado de 6 meses</span>
          </div>
          <div class="discount">15% OFF</div>
          <p>Economize até R$ 252</p>
        </div>
        <div class="card vertical">
          <div class="card-header">
            <div class="card-icon">
              <span>🎵</span>
            </div>
            <p>Pacote Anual</p>
            <span>Pagamento antecipado de 12 meses</span>
          </div>
          <div class="discount">30% OFF</div>
          <p>Economize até R$ 1.728</p>
        </div>
      </div>
      <div
        class="card emphasis big"
        v-scroll-reveal="{ delay: 200, origin: 'bottom', container: 'main' }"
      >
        <p class="card-title highlight">Condições Imperdíveis</p>
        <ul>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Primeira aula gratuita sem compromisso</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Material didático incluso (valor R$ 150)</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Desconto de 20% na matrícula até o final do mês</span>
          </li>
          <li>
            <font-awesome-icon icon="fa-circle-check" />
            <span>Garanta 30 dias ou seu dinheiro de volta</span>
          </li>
        </ul>
        <button type="button" class="btn btn-primary">Agendar Aula Gratuita Agora</button>
      </div>
    </div>
    <slot></slot>
  </section>
</template>
<script>
export default {}
</script>
<style scoped>
.gift,
.discount {
  padding: var(--space-4) var(--space-6);
  background: var(--gradient-default);
  border-radius: 4rem;
  color: var(--black);
  display: grid;
  place-items: center;
  text-shadow: 0.4px 0.4px 0px var(--black);
  margin-top: var(--space-6);
}

.card {
  text-align: center;
}

@media (max-width: 768px) {
  .card {
    text-align: left;
  }
}
</style>
