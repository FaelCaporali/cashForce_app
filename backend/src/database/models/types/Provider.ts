import { Optional } from 'sequelize';
import { SponsorAtt, SponsorCreationAtt } from './Sponsor';

export type ProviderAtt = SponsorAtt & {
    documents: string;
};

export type ProviderCreationAtt = SponsorCreationAtt & Optional<
    ProviderAtt,
    'documents'
>;