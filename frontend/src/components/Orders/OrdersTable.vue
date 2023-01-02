<script setup lang="ts">
import type { IOrder } from "@/interfaces";
import { useUserStore } from "../../stores/user";
import OrdersRow from "./OrdersRow.vue";

const userStore = await useUserStore();
console.log(userStore);
const orders = [
  {
    id: 1,
    orderNfId: "1605181324132",
    orderNumber: "18153",
    orderPath: null,
    orderFileName: null,
    orderOriginalName: null,
    emissionDate: "2020-10-30T11:00:00-03:00",
    pdfFile: null,
    emitedTo: "22843980000127",
    nNf: "18153",
    CTE: "",
    value: "198450",
    cnpjId: 1,
    userId: 1,
    buyerId: 1,
    providerId: 1,
    orderStatusBuyer: "0",
    orderStatusProvider: "0",
    deliveryReceipt: null,
    cargoPackingList: null,
    deliveryCtrc: null,
    createdAt: "2020-10-30T17:54:18.000Z",
    updatedAt: "2020-10-30T17:54:18.000Z",
    cnpj: {
      id: 1,
      cnpj: "00000000000001",
      companyType: "2",
      createdAt: "2020-10-29T21:20:33.000Z",
      updatedAt: "2020-10-29T21:20:33.000Z",
    },
    user: {
      id: 1,
      name: "ALLAN SOUZA",
      email: "allan@cashforce.com.br",
      phoneNumber: null,
      mobile: null,
      department: null,
      verificationCode: "",
      emailChecked: true,
      cashforceAdm: true,
      createdAt: "2020-10-01T21:31:37.000Z",
      updatedAt: "2020-10-01T22:41:23.000Z",
    },
    buyer: {
      id: 1,
      name: "SACADO 001",
      tradingName: "SACADO 001 LTDA",
      cashforceTax: "0",
      responsibleName: null,
      responsibleEmail: null,
      responsiblePosition: null,
      responsiblePhone: null,
      responsibleMobile: null,
      website: null,
      postalCode: null,
      address: null,
      number: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null,
      phoneNumber: null,
      situation: null,
      situationDate: null,
      cnpjId: 1,
      email: null,
      confirm: true,
      createdAt: "2020-10-29T21:20:33.000Z",
      updatedAt: "2020-10-29T21:20:34.000Z",
    },
    provider: {
      id: 1,
      name: "CEDENTE 002",
      tradingName: "CEDENTE 002 LTDA",
      cashforceTax: null,
      responsibleName: null,
      responsibleEmail: null,
      responsiblePosition: null,
      responsiblePhone: null,
      responsibleMobile: null,
      website: null,
      postalCode: null,
      address: null,
      number: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null,
      phoneNumber: null,
      situation: null,
      situationDate: null,
      cnpjId: 2,
      email: null,
      bank: null,
      bankAgency: null,
      account: null,
      documents: null,
      createdAt: "2020-10-29T21:22:21.000Z",
      updatedAt: "2020-10-29T21:22:22.000Z",
    },
  },
  {
    id: 2,
    orderNfId: "160518132413",
    orderNumber: "18157",
    orderPath: null,
    orderFileName: null,
    orderOriginalName: null,
    emissionDate: "2020-11-04T15:32:35-02:00",
    pdfFile: null,
    emitedTo: "35705180000272",
    nNf: "18157",
    CTE: "",
    value: "168850",
    cnpjId: 1,
    userId: 1,
    buyerId: 1,
    providerId: 1,
    orderStatusBuyer: "0",
    orderStatusProvider: "0",
    deliveryReceipt: null,
    cargoPackingList: null,
    deliveryCtrc: null,
    createdAt: "2020-11-10T18:33:46.000Z",
    updatedAt: "2020-11-10T18:33:46.000Z",
    cnpj: {
      id: 1,
      cnpj: "00000000000001",
      companyType: "2",
      createdAt: "2020-10-29T21:20:33.000Z",
      updatedAt: "2020-10-29T21:20:33.000Z",
    },
    user: {
      id: 1,
      name: "ALLAN SOUZA",
      email: "allan@cashforce.com.br",
      phoneNumber: null,
      mobile: null,
      department: null,
      verificationCode: "",
      emailChecked: true,
      cashforceAdm: true,
      createdAt: "2020-10-01T21:31:37.000Z",
      updatedAt: "2020-10-01T22:41:23.000Z",
    },
    buyer: {
      id: 1,
      name: "SACADO 001",
      tradingName: "SACADO 001 LTDA",
      cashforceTax: "0",
      responsibleName: null,
      responsibleEmail: null,
      responsiblePosition: null,
      responsiblePhone: null,
      responsibleMobile: null,
      website: null,
      postalCode: null,
      address: null,
      number: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null,
      phoneNumber: null,
      situation: null,
      situationDate: null,
      cnpjId: 1,
      email: null,
      confirm: true,
      createdAt: "2020-10-29T21:20:33.000Z",
      updatedAt: "2020-10-29T21:20:34.000Z",
    },
    provider: {
      id: 1,
      name: "CEDENTE 002",
      tradingName: "CEDENTE 002 LTDA",
      cashforceTax: null,
      responsibleName: null,
      responsibleEmail: null,
      responsiblePosition: null,
      responsiblePhone: null,
      responsibleMobile: null,
      website: null,
      postalCode: null,
      address: null,
      number: null,
      complement: null,
      neighborhood: null,
      city: null,
      state: null,
      phoneNumber: null,
      situation: null,
      situationDate: null,
      cnpjId: 2,
      email: null,
      bank: null,
      bankAgency: null,
      account: null,
      documents: null,
      createdAt: "2020-10-29T21:22:21.000Z",
      updatedAt: "2020-10-29T21:22:22.000Z",
    },
  },
];
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
