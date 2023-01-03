<script setup lang="ts">
import { RouterLink } from "vue-router";
const props = defineProps<{ providerId: number }>();
const route: string = `/providers/${props.providerId}`;
</script>

<template>
  <RouterLink v-bind:to="route" class="router-btn"
    >Detalhes do cedente</RouterLink
  >
</template>

<style scoped>
.router-btn {
  width: 100%;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  text-decoration: none;
  color: #727d94;
  min-height: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
