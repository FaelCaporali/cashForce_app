import { defineStore } from "pinia";
import { API } from "../api";
import type { IUser, IOrder } from "../interfaces";

export const useUserStore = defineStore("user", async () => {
  const { logBuyer, logOutBuyer, getMyOrders, getMe } = new API();

  await logBuyer({ name: 'allan@cashforce.com.br' });

  const user: IUser = await getMe();
  const orders: IOrder[] = await getMyOrders();

  return {
    ...user,
    orders,
    logBuyer: () => (user.id ? "Already logged" : logBuyer),
    logOutBuyer,
  };
});
