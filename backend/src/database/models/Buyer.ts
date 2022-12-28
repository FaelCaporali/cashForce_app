import { BOOLEAN } from 'sequelize';

import CNPJOwner from '../assets/models-helpers/CNPJOwnerClass';
import { CNPJOwnersColumns, CNPJOwnersOptions } from '../assets/models-helpers/CNPJOwnersConfig';

import { BuyerAtt, BuyerCreationAtt } from './types/Buyer';

import Cnpj from './Cnpj';

class Buyer extends CNPJOwner<BuyerAtt, BuyerCreationAtt> {
  declare confirm?: boolean;
}

Buyer.init({
  ...CNPJOwnersColumns,
  confirm: {
    type: BOOLEAN,
    defaultValue: true,
  },
}, {
  ...CNPJOwnersOptions,
  modelName: 'buyers',
  initialAutoIncrement: '152',
});

Cnpj.hasMany(Buyer, { sourceKey: 'id', foreignKey: 'cnpjId' });
Buyer.belongsTo(Cnpj, { foreignKey: 'cnpjId', targetKey: 'id' });

export default Buyer;
