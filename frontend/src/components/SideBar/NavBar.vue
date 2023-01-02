<script setup lang="ts">
import NavLink from "./NavLink.vue";
</script>

<template>
  <div class="sider-fornecedor">
    <NavLink to="/orders" text="Notas Fiscais" />
  </div>
</template>

<style scoped>
.sider-fornecedor {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  width: 288px;
  height: 144px;
  left: 0px;
  top: 0px;
}
</style>
