import { Optional } from 'sequelize';

export type CnpjAtt = {
    id: number,
    cnpj: string,
    companyType: string,
};

export type CnpjCreationAtt = Optional<CnpjAtt, 'id'>;
