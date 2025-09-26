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
          <span v-on:click="anchor('inicio')" class="anchor">Início</span>
          <span v-on:click="anchor('inicio')" class="anchor">Modalidades</span>
          <span v-on:click="anchor('inicio')" class="anchor">Pacotes</span>
          <span v-on:click="anchor('inicio')" class="anchor">Processo Seletivo</span>
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
          <div class="contact">
            <font-awesome-icon icon="fa-location-dot" />
            <span>Rua da Música, 123 - Centro, Cambé - PR</span>
          </div>
          <div class="contact">
            <font-awesome-icon icon="fa-phone" />
            <span>(43) 9 9999-9999</span>
          </div>
          <div class="contact">
            <font-awesome-icon icon="fa-envelope" />
            <span>contato@lotusmusic.com.br</span>
          </div>
          <div class="contact">
            <font-awesome-icon icon="fa-clock" />
            <span>Seg a Sex: 8h às 22h | Sáb: 8h às 18h</span>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="container footer-signature">
      <div class="signature">
        <p>© 2025 Lótus Music. Todos os direitos reservados</p>
        <a href="https://kineticsolutions.com.br?utm_source=lotus-music" target="_blank">
          <span>Site criado por KSI - Kinetic Solutions</span>
        </a>
      </div>
      &nbsp;
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
.newsletter {
  display: grid;
  place-items: center;
  margin-bottom: var(--space-12);
}

footer {
  background: linear-gradient(to top left, var(--black), var(--black-2));
  width: 100dvw;
  padding: var(--space-12) var(--space-6);
  position: absolute;
  bottom: -48px;
  left: -20px;
}

.container {
  padding: var(--space-12) 0 !important;
}

form {
  margin-top: var(--space-6);
}

hr {
  margin-left: -20px;
  border-color: rgba(253, 215, 98, 0.1);
}

img {
  width: 15rem;
}

.footer-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--space-16);
}

.section {
  display: flex;
  flex-direction: column;
  gap: var(--space-6);

  & span {
    height: fit-content;
  }

  & svg {
    color: var(--yellow-2);
  }
}

.links {
  display: flex;
  gap: var(--space-3);
  align-items: center;

  & svg {
    cursor: pointer;
    font-size: var(--fontsize-lg);
  }
}

.contact {
  display: flex;
  align-items: center;
  gap: var(--space-3);
}

@media (max-width: 1200px) {
  .footer-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .footer-container {
    grid-template-columns: 1fr;
  }

  .footer-signature {
    flex-direction: column;

    & .signature {
      place-items: center !important;
    }
  }
}

.footer-signature {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-6) 0 !important;

  & .signature {
    position: relative;
    place-items: start;
    padding-left: 0;
    padding-right: 0;
  }

  & .utils {
    display: flex;
    gap: var(--space-6);
  }

  & a {
    font-size: var(--fontsize-md);
    color: var(--yellow-3);
    text-decoration: none;
  }
}
</style>
