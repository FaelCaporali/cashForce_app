<script setup lang="ts">
import NavLink from "./NavLink.vue";
</script>

<template>
  <nav>
    <NavLink to="/orders" text="Notas Fiscais" />
  </nav>
</template>

<style scoped>
nav {
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 1vh;
}
</style>
