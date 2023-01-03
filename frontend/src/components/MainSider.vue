<script setup lang="ts">
import MenuHero from "./SideBar/MenuHero.vue";
import NavBar from "./SideBar/NavBar.vue";
</script>

<template>
  <aside>
    <MenuHero />
    <NavBar />
  </aside>
</template>

<style scoped>
aside {
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
}
</style>
