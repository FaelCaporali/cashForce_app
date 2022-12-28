import { Optional } from 'sequelize';

export type ProviderAtt = {
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
    bank: string;
    bankAgency: string;
    account: string;
    documents: string;
    phoneNumber: string;
    situation: string;
    situationDate: string;
    cnpjId: string;
    email: string;
};

export type ProviderCreationAtt = Optional<
    ProviderAtt,
    'id' | 'tradingName' | 'cashforceTax' | 'responsibleName' | 'responsibleEmail' | 'responsiblePosition' | 'responsiblePhone' | 'responsibleMobile' | 'website' | 'postalCode' | 'address' | 'number' | 'account' | 'bank' | 'bankAgency' | 'city' | 'cnpjId' | 'complement' | 'documents' | 'email' | 'neighborhood' | 'phoneNumber' | 'situation' | 'situationDate' | 'state'
>;