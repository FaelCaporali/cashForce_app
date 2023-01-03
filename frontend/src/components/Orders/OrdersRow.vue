<script setup lang="ts">
import type { IOrder } from "../../interfaces";
import ProviderLink from "../shared/ProviderLink.vue";
const props = defineProps<{ order: IOrder }>();

const statusMapper = [
  "Pendente de confirmação",
  "Pedido confirmado",
  "Não reconhece o pedido",
  "Mercadoria não recebida",
  "Recebida com avaria",
  "Devolvida",
  "Recebida com devolução parcial",
  "Recebida e confirmada",
  "Pagamento Autorizado",
];
</script>

<template>
  <tr>
    <td>{{ props.order.nNf }}</td>
    <td>{{ props.order.buyer.name }}</td>
    <td>{{ props.order.provider.name }}</td>
    <td>{{ props.order.emissionDate }}</td>
    <td>{{ props.order.value }}</td>
    <td>{{ statusMapper[props.order.orderStatusBuyer] }}</td>
    <td><ProviderLink v-bind:providerId="props.order.provider.id" /></td>
  </tr>
</template>

<style scoped>
tr {
  display: flex;
  align-items: baseline;
  justify-content: center;
}
</style>
