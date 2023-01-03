<script setup lang="ts">
import { RouterView } from "vue-router";
import MainSider from "./components/MainSider.vue";
import HeaderSistema from "./components/HeaderSistema.vue";
</script>

<template>
  <div class="page-wrapper">
    <MainSider class="side-bar" />
    <div class="content-wrapper">
      <HeaderSistema />
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.page-wrapper {
  display: flex;
  width: 99vw;
  height: 95vh;
  background-color: #fbfdfe;
}

.side-bar {
  flex-grow: 1;
}
.content-wrapper {
  display: flex;
  flex-flow: column nowrap;
  flex-grow: 3;
  padding: 3%;
  min-width: 800px;
}
</style>
