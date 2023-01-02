<script setup lang="ts">
import { RouterLink } from 'vue-router';
const props = defineProps<{ providerId: number }>();
const route: string = `/providers/${props.providerId}`;
</script>

<template>
  <RouterLink v-bind:to="route">Detalhes do cedente</RouterLink>
</template>
