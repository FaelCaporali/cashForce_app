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
  <table>
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
    <tbody>
      <OrdersRow
        v-for="order in orders"
        v-bind:key="order.id"
        v-bind:order="(order as IOrder)"
      />
    </tbody>
  </table>
</template>

<style>
table {
  margin-top: 2%;
  width: 100%;
}
tbody {
  display: flex;
  flex-flow: row wrap;
}
tr {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 1%;
}

th {
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3%;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  color: #a1a8b8;
}
</style>
