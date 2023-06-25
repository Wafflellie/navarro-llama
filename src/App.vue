<script setup>

import ANavigation from './components/navigation/ant-navigation.vue';
import AFooter from './components/footer/ant-footer.vue';

import '@/assets/main.css';

</script>

<template>

  <ANavigation />
  <!-- <Homepage /> -->

  <router-view />

  <AFooter />

</template>

<style scoped>

</style>
