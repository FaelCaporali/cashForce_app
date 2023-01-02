<script setup lang="ts">
import OrdersHeader from "../components/Orders/OrdersHeader.vue";
import OrdersTable from "../components/Orders/OrdersTable.vue";
</script>

<template>
  <main class="content-wrapper">
    <OrdersHeader />
    <Suspense>
      <OrdersTable />
    </Suspense>
  </main>
</template>

<style scoped>
.content-wrapper {
  width: 1272px;
  height: 836px;
  top: 64px;
}
</style>
