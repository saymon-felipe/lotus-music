<template>
    <headerComponent></headerComponent>

    <main>
        <heroComponent></heroComponent>
    </main>

    <footerComponent></footerComponent>
</template>
<script>
    import headerComponent from "../components/headerComponent.vue";
    import heroComponent from "../components/heroComponent.vue";
    import footerComponent from "../components/footerComponent.vue";

    export default {
        components: {
            headerComponent,
            heroComponent,
            footerComponent
        },
        data() {
            return {

            }
        }
    }
</script>