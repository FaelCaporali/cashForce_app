import { Optional } from 'sequelize';

export type OrderPortionAtt = {
    id: number,
    nDup: string,
    dVenc: string,
    vDup: string,
    availableToMarket: boolean,
    orderId: number,
};

export type OrderPortionCreationAtt = Optional<
    OrderPortionAtt,
    'id' | 'availableToMarket' | 'orderId'
>;