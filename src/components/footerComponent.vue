<template>
  <footer>
    <div class="container">
      <div class="newsletter">
        <div class="section-title">
          <h2 class="highlight">Receba Dicas Musicais Exclusivas</h2>
          <p>Cadastre-se para receber exercícios, partituras gratuitas e novidades da escola.</p>
          <form @submit.prevent="submitNewsletter">
            <div class="form-group">
              <input type="email" placeholder="Seu melhor e-mail" v-model="email" required />
              <button type="submit" class="btn btn-primary">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="footer-container">
        <div class="section">
          <img src="../assets/img/logo-transparente.webp" alt="Lótus Music" />
          <span>
            Transformando vidas através da música há mais de 10 anos. Ensino de qualidade,
            professores especializados e tecnologia de ponta.
          </span>
          <div class="links">
            <a>
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a>
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a>
              <font-awesome-icon :icon="['fab', 'youtube']" />
            </a>
          </div>
        </div>
        <div class="section">
          <p class="highlight">Links Rápidos</p>
          <span v-on:click="anchor('inicio')">Início</span>
          <span v-on:click="anchor('inicio')">Modalidades</span>
          <span v-on:click="anchor('inicio')">Pacotes</span>
          <span v-on:click="anchor('inicio')">Processo Seletivo</span>
        </div>
        <div class="section">
          <p class="highlight">Links Rápidos</p>
          <span>
            <font-awesome-icon icon="fa-music" />
            Piano
          </span>
          <span>
            <font-awesome-icon icon="fa-music" />
            Violão
          </span>
          <span>
            <font-awesome-icon icon="fa-music" />
            Guitarra
          </span>
          <span>
            <font-awesome-icon icon="fa-music" />
            Baixo
          </span>
          <span>
            <font-awesome-icon icon="fa-music" />
            Bateria
          </span>
          <span>
            <font-awesome-icon icon="fa-music" />
            Canto
          </span>
          <span>
            <font-awesome-icon icon="fa-music" />
            Violino
          </span>
          <span>
            <font-awesome-icon icon="fa-music" />
            Saxofone
          </span>
        </div>
        <div class="section">
          <p class="highlight">Contato</p>
          <span>
            <font-awesome-icon icon="fa-location-dot" />
            Rua da Música, 123 - Centro, Cambé - PR
          </span>
          <span>
            <font-awesome-icon icon="fa-phone" />
            (43) 9 9999-9999
          </span>
          <span>
            <font-awesome-icon icon="fa-envelope" />
            contato@lotusmusic.com.br
          </span>
          <span>
            <font-awesome-icon icon="fa-clock" />
            Seg a Sex: 8h às 22h | Sáb: 8h às 18h
          </span>
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <div class="signature">
        <p>© 2025 Lótus Music. Todos os direitos reservados</p>
        <a href="https://kineticsolutions.com.br?utm_source=lotus-music" target="_blank">
          <span>Desenvolvido por KSI - Kinetic Solutions</span>
        </a>
      </div>
      <div class="utils">
        <a href="#">Política de Privacidade</a>
        <a href="#">Termos de Uso</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      email: '',
    }
  },
  methods: {
    submitNewsletter: function () {
      console.log('email: ', this.email)
    },
  },
}
</script>
<style scoped>
footer {
  background: linear-gradient(to top left, var(--black), var(--black-2));
  width: 100dvw;
  padding: var(--space-12) var(--space-6);
  position: absolute;
  bottom: -48px;
  left: -20px;
}

form {
  margin-top: var(--space-6);
}

hr {
  margin-left: -20px;
  border-color: rgba(253, 215, 98, 0.1);
}
</style>
