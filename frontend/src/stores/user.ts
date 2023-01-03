import { defineStore } from "pinia";
import { API } from "../api";
import type { IUser, IOrder } from "./../interfaces/index";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as IUser,
    orders: [] as IOrder[],
    api: new API(),
  }),
  getters: {
    getUser(state) {
      return state.user;
    },
    getOrders(state) {
      return state.orders;
    },
  },
  actions: {
    async logBuyer() {
      try {
        await this.api.logBuyer();
        this.user = await this.api.getMe();
      } catch (e) {
        console.log(e);
      }
    },
    logOutBuyer() {
      this.api.logOutBuyer();
    },
    async getMyOrders() {
      try {
        this.orders = await this.api.getMyOrders();
      } catch (e) {
        console.log(e);
      }
    },
  },
});
