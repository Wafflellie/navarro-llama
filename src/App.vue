<script setup>

import ANavigation from './components/navigation/NavigationMenu.vue';
import AFooter from './components/footer/ant-footer.vue';

import '@/assets/main.css';

</script>

<template>

<div style="position: absolute;
            z-index: 1;
            width: 100vw;">
  <ANavigation />
</div>

<div style="position: relative;
            z-index: -1;">
  <router-view />
</div>

  <AFooter />

</template>

<style scoped>

</style>
