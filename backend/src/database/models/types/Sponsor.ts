import { Optional } from 'sequelize';
import { CNPJOwnerAtt, CNPJOwnerCreationAtt } from './CNPJOwner';

export type SponsorAtt =  CNPJOwnerAtt & {
    bank: string;
    bankAgency: string;
    account: string;
};

export type SponsorCreationAtt = CNPJOwnerCreationAtt & Optional<
    SponsorAtt,
    'account' | 'bank' | 'bankAgency'
>;