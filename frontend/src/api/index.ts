import axios from "axios";
import type { AxiosInstance } from "axios";
import type { IUser, IOrder } from "../interfaces";

export class API {
  private api: AxiosInstance;
  private token: string | undefined;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3001",
    });
  }

  async logBuyer(): Promise<void> {
    this.token = "1";
    this.api.defaults.headers.common["Authorization"] = this.token;
  }

  async logOutBuyer() {
    this.token = undefined;
    this.api.defaults.headers.common["Authorization"] = undefined;
  }

  async getMyOrders(): Promise<IOrder[]> {
    const { data } = (await this.api.get("/orders"));
    return data as IOrder[];
  }

  async getMe() {
    const { data } = (await this.api.get("/me"));
    return data as IUser;
  }
}
