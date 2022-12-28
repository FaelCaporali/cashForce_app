import { STRING } from 'sequelize';

import CNPJOwner from '../assets/models-helpers/CNPJOwnerClass';
import { CNPJOwnersColumns, CNPJOwnersOptions } from '../assets/models-helpers/CNPJOwnersConfig';

import { SponsorAtt, SponsorCreationAtt } from './types/Sponsor';

import Cnpj from './Cnpj';

export const SponsorsColumns = {
  ...CNPJOwnersColumns,
  bank: {
    type: STRING,
    defaultValue: null,
  },
  bankAgency: {
    type: STRING,
    defaultValue: null,
  },
  account: {
    type: STRING,
    defaultValue: null,
  },
};

class Sponsor<Att, CreationAtt> extends CNPJOwner<SponsorAtt & Att, SponsorCreationAtt & CreationAtt> {
  declare bank?: string;
  declare bankAgency?: string;
  declare account?: string;
}

Sponsor.init(
  SponsorsColumns,
  {
    ...CNPJOwnersOptions,
    modelName: 'sponsors',
    initialAutoIncrement: '17',
  }
);

Cnpj.hasMany(Sponsor, { sourceKey: 'id', foreignKey: 'cnpjId' });
Sponsor.belongsTo(Cnpj, { foreignKey: 'cnpjId', targetKey: 'id' });

export default Sponsor;
