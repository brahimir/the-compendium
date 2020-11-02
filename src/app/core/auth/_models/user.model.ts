import { BaseModel } from '../../_base/crud';
import { Address } from './address.model';
import { SocialNetworks } from './social-networks.model';

export class User extends BaseModel {
  id: number;
  username: string;
  password: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  roles: number[];
  fullName: string;

  clear(): void {
    this.id = undefined;
    this.username = '';
    this.password = '';
    this.email = '';
    this.roles = [];
    this.fullName = '';
    this.accessToken = 'access-token-' + Math.random();
    this.refreshToken = 'access-token-' + Math.random();
  }
}
