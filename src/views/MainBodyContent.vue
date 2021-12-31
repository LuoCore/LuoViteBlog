<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import NoscriptTag from '../components/NoscriptTag.vue';
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import HandheldToolbar from '../components/HandheldToolbar.vue';
import BackTopButton from '../components/BackTopButton.vue';
</script>
<template>
    <NoscriptTag />
    <NavbarComponent />
    <router-view />
    <FooterComponent />
    <HandheldToolbar />
    <BackTopButton />
</template>
