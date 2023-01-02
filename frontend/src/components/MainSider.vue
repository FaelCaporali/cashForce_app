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
  position: absolute;
  width: 288px;
  height: 900px;
  left: 0px;
  top: 0px;
}
</style>
