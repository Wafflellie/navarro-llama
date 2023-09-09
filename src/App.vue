<script setup>

import ANavigation from './components/navigation/navigation-menu.vue';
import AFooter from './components/footer/ant-footer.vue';

import '@/assets/main.css';
</script>

<template>


  <ANavigation />



  <router-view />


  <AFooter />

</template>

<style scoped>

</style>
