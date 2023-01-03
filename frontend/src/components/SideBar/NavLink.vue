<script setup lang="ts">
import { RouterLink } from "vue-router";

const props = defineProps<{
  to: string;
  text: string;
}>();
</script>

<template>
  <RouterLink v-bind:to="props.to" class="menu-item">
    <img src="../../assets/MenuIcon_Hands.svg" class="menu-icon" />
    <span class="menu-text">{{ props.text }}</span>
  </RouterLink>
</template>

<style scoped>
.menu-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1%;
}
.menu-item:hover {
  border-left: 4px #00ad8c solid;
}

.menu-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5%;
}

.menu-text {
  flex-grow: 1;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  text-align: start;
  color: #00ad8c;
  width: 60%;
}

a {
  text-decoration: none;
}
</style>
