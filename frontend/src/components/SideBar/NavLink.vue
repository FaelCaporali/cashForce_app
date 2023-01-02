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
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px;

  width: 288px;
  height: 64px;
}

.menu-item:hover {
  border-left: 4px #00ad8c solid;
}

.menu-icon {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 0px;
  gap: 10px;

  width: 24px;
  height: 44px;
}

.menu-text {
  width: 85px;
  height: 18px;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #00ad8c;
}

a {
  text-decoration: none;
}
</style>
