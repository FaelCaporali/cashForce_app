export interface IUser {
  id: number;
  name: string;
  role: "buyer" | "provider" | "sponsor" | "admin";
}

export interface IOrder {
  id: number;
  nNf: string;
  emissionDate: string;
  value: number;
  orderStatusBuyer: number;
  buyer: {
    id: number;
    name: string;
  };
  provider: {
    id: number;
    name: string;
  };
}
