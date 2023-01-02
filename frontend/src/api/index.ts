import axios from "axios";
import type { AxiosInstance } from 'axios';
import type { IUser, IOrder } from '../interfaces';


export class API {
  declare readonly api: AxiosInstance;
  declare token: string | undefined;

  constructor() {
    this.api = axios.create({
      baseURL: "http://localhost:3001",
    });
  }

  async logBuyer(credentials: { name: string }): Promise<void> {
    this.token = await this.api.post("/login", credentials);
    this.api.defaults.headers.common["Authorization"] = this.token;
  }

  async logOutBuyer() {
    this.token = undefined;
    this.api.defaults.headers.common["Authorization"] = undefined;
  }

  async getMyOrders(): Promise<IOrder[]> {
    return (await this.api.get("/orders")) as IOrder[];
  }

  async getMe() {
    return (await this.api.get("/me")) as IUser;
  }
}

const api = new API();

export default api;
