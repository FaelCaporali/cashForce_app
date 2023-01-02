<script setup lang="ts">
import { RouterView } from "vue-router";
import MainSider from "./components/MainSider.vue";
import HeaderSistema from "./components/HeaderSistema.vue";
</script>

<template>
  <HeaderSistema />
  <MainSider />

  <RouterView />
</template>
