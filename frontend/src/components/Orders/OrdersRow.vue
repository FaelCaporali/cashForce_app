<script setup lang="ts">
import type { IOrder } from "../../interfaces";
import ProviderLink from "../shared/ProviderLink.vue";
import { formatDate, formatValue } from "../../helpers/formatters";
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
    <td>{{ formatDate(props.order.emissionDate) }}</td>
    <td class="value">{{ formatValue(props.order.value) }}</td>
    <td class="status">{{ statusMapper[props.order.orderStatusBuyer] }}</td>
    <td class="link-btn">
      <ProviderLink v-bind:providerId="props.order.provider.id" />
    </td>
  </tr>
</template>

<style scoped>
tr {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  border: 1px solid #dfe2eb;
  border-radius: 6px;
}
td {
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 3%;

  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;

  color: #4d5566;
}

.value {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
  align-items: center;

  color: #00ad8c;
}

.status {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;

  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;

  color: #00ad8c;
}

.link-btn {
  display: flex;
  flex-direction: row;
  align-items: center;

  border: 1px solid #cad3ff;
  border-radius: 24px;
  margin: 1%;
}
</style>
