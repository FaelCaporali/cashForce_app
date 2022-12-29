import { Optional } from 'sequelize';

export type OrderAtt = {
  id: number,
  orderNfId: string,
  orderNumber: string,
  orderPath: string,
  orderFileName: string,
  orderOriginalName: string,
  emissionDate: string,
  pdfFile: string,
  emitedTo: string,
  nNf: string,
  CTE: string,
  value: string,
  cnpjId: number,
  userId: number,
  buyerId: number,
  providerId: number,
  orderStatusBuyer: '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8',
  orderStatusProvider: '0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8',
  deliveryReceipt: string,
  cargoPackingList: string,
  deliveryCtrc: string,
};

export type OrderCreationAtt = Optional<
  OrderAtt,
  'id' | 'orderPath' | 'orderFileName' | 'orderOriginalName' | 'emissionDate' | 'pdfFile' | 'nNf' | 'CTE' | 'value' | 'cnpjId' | 'userId' | 'buyerId' | 'providerId' | 'orderStatusBuyer' | 'orderStatusProvider' | 'deliveryReceipt' | 'cargoPackingList' | 'deliveryCtrc'
>;