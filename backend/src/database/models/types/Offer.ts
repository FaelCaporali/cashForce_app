import { Optional } from 'sequelize';

export type OfferAtt = {
  id: number,
  tax: string,
  tariff: string,
  adValorem: string,
  float: string,
  iof: string,
  expiresIn: Date,
  paymentStatusSponsor: boolean,
  paymentStatusProvider: boolean,
  orderId: number,
  sponsorId: number,
}

export type OfferCreationAtt = Optional<OfferAtt, 'id' | 'paymentStatusProvider' | 'paymentStatusSponsor'>;