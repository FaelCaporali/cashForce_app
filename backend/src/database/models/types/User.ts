import { Optional } from 'sequelize';

export type UserAtt = {
    id: number,
    name: string,
    email: string,
    phoneNumber: string,
    mobile: string,
    department: string,
    verificationCode: string,
    emailChecked: boolean,
    cashforceAdm: boolean,    
};

export type UserCreationAtt = Optional<
    UserAtt,
    'id' | 'phoneNumber' | 'mobile' | 'department' | 'verificationCode' | 'emailChecked' | 'cashforceAdm'
>;
