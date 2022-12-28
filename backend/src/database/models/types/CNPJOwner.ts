import { Optional } from 'sequelize';

export type CNPJOwnerAtt = {
    id: number;
    name: string;
    tradingName: string;
    cashforceTax: string;
    responsibleName: string;
    responsibleEmail: string;
    responsiblePosition: string;
    responsiblePhone: string;
    responsibleMobile: string;
    website: string;
    postalCode: string;
    address: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    phoneNumber: string;
    situation: string;
    situationDate: string;
    cnpjId: string;
    email: string;
};

export type CNPJOwnerCreationAtt = Optional<
    CNPJOwnerAtt,
    'id' | 'tradingName' | 'cashforceTax' | 'responsibleName' | 'responsibleEmail' | 'responsiblePosition' | 'responsiblePhone' | 'responsibleMobile' | 'website' | 'postalCode' | 'address' | 'number' | 'city' | 'cnpjId' | 'complement' | 'email' | 'neighborhood' | 'phoneNumber' | 'situation' | 'situationDate' | 'state'
>;