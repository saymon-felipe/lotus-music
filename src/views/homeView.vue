<template>
  <headerComponent></headerComponent>

  <main>
    <heroComponent></heroComponent>
    <aboutComponent></aboutComponent>
    <modalitiesComponent></modalitiesComponent>
    <classFormats></classFormats>
    <selectionProcess></selectionProcess>
    <priceAndPlans>
      <footerComponent></footerComponent>
    </priceAndPlans>
  </main>

  <FloatingNotesBackground class="animated-show" />
</template>
<script>
import headerComponent from '../components/headerComponent.vue'
import heroComponent from '../components/heroComponent.vue'
import aboutComponent from '../components/aboutComponent.vue'
import footerComponent from '../components/footerComponent.vue'
import classFormats from '../components/classFormats.vue'
import modalitiesComponent from '../components/modalitiesComponent.vue'
import selectionProcess from '../components/selectionProcess.vue'
import priceAndPlans from '../components/priceAndPlans.vue'
import FloatingNotesBackground from '../components/FloatingNotesBackground.vue'

export default {
  components: {
    headerComponent,
    heroComponent,
    footerComponent,
    FloatingNotesBackground,
    aboutComponent,
    classFormats,
    modalitiesComponent,
    selectionProcess,
    priceAndPlans,
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
