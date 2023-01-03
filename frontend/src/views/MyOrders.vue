<script setup lang="ts">
import OrdersHeader from "../components/Orders/OrdersHeader.vue";
import OrdersTable from "../components/Orders/OrdersTable.vue";
</script>

<template>
  <main>
    <OrdersHeader />
    <Suspense>
      <OrdersTable />
    </Suspense>
  </main>
</template>
