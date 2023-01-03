<script setup lang="ts">
import type { IOrder } from "@/interfaces";
import { useUserStore } from "../../stores/user";
import OrdersRow from "./OrdersRow.vue";
import { onMounted, computed } from "vue";

const userStore = useUserStore();
userStore.logBuyer();
const orders = computed(() => {
  return userStore.orders;
});
onMounted(() => {
  userStore.getMyOrders();
});
</script>

<template>
  <table class="main-table">
    <thead>
      <tr>
        <th>NOTA FISCAL</th>
        <th>SACADO</th>
        <th>CEDENTE</th>
        <th>EMISSÃO</th>
        <th>VALOR</th>
        <th>STATUS</th>
        <th></th>
      </tr>
    </thead>
    <tbody v-for="order in orders" v-bind:key="order.id">
      <OrdersRow v-bind:order="(order as IOrder)" />
    </tbody>
  </table>
</template>

<style scoped>
.main-table {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  position: absolute;
  width: 1177px;
  height: 214px;
  left: 336px;
  top: 240px;
}
</style>
