import { STRING } from 'sequelize';

import Sponsor, { SponsorsColumns } from './Sponsor';
import { ProviderAtt, ProviderCreationAtt } from './types/Provider';

import TablesOptions from '../assets/models-helpers/TablesOpt';

import Cnpj from './Cnpj';

class Provider extends Sponsor<ProviderAtt, ProviderCreationAtt> {
  declare documents?: string;
}

Provider.init({
  ...SponsorsColumns,
  documents: {
    type: STRING,
    defaultValue: null,
  },
}, {
  ...TablesOptions,
  modelName: 'providers',
  initialAutoIncrement: '235',
});

Cnpj.hasMany(Provider, { sourceKey: 'id', foreignKey: 'cnpjId' });
Provider.belongsTo(Cnpj, { foreignKey: 'cnpjId', targetKey: 'id' });

export default Provider;
