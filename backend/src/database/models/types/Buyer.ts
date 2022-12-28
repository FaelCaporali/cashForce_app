import { Optional } from 'sequelize';
import { CNPJOwnerAtt, CNPJOwnerCreationAtt } from './CNPJOwner';

export type BuyerAtt = CNPJOwnerAtt & {
    confirm: boolean;
};

export type BuyerCreationAtt = CNPJOwnerCreationAtt & Optional<
    BuyerAtt,
    'confirm'
>;