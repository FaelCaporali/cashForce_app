import Buyer from '../database/models/Buyer';
import Provider from '../database/models/Provider';
import User from '../database/models/User';

export default class UserServices {
  private readonly user: typeof User;
  private readonly buyer: typeof Buyer;
  private readonly provider: typeof Provider;
  constructor() {
    this.user = User;
    this.buyer = Buyer;
    this.provider = Provider;
  }

  public async getMe(id: number, role: 'provider' | 'user' | 'buyer' | undefined = 'buyer') {
    let user;
    switch (role) {
    
    case 'user': user = await this.user.findByPk(id);
    case 'provider': user = await this.provider.findByPk(id);
    
    default: user = await this.buyer.findByPk(id);
    }
    return {
      id: user?.id,
      name: user?.name,
      role
    };
  }
}