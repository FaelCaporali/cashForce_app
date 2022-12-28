import { Model } from 'sequelize';
import { CNPJOwnerAtt, CNPJOwnerCreationAtt } from '../../models/types/CNPJOwner';

export default abstract class CNPJOwner<Att, CreationsAtt> extends Model<CNPJOwnerAtt & Att, CNPJOwnerCreationAtt & CreationsAtt> {
  declare id?: number;
  declare name: string;
  declare tradingName?: string;
  declare cashforceTax?: string;
  declare responsibleName?: string;
  declare responsibleEmail?: string;
  declare responsiblePosition?: string;
  declare responsiblePhone?: string;
  declare responsibleMobile?: string;
  declare website?: string;
  declare postalCode?: string;
  declare address?: string;
  declare number?: string;
  declare complement?: string;
  declare neighborhood?: string;
  declare city?: string;
  declare state?: string;
  declare phoneNumber?: string;
  declare situation?: string;
  declare situationDate?: string;
  declare cnpjId?: string;
  declare email?: string;
}
