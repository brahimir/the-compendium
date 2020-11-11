import { BaseModel } from '../../_base/crud';

export class User extends BaseModel {
  id: number;
  username: string;
  password: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  roles: number[];
  fullName: string;
  user_settings: {
    user_dashboard: string[],
    user_storyboard: {
      plots_main:{
        title: string,
        description: string
      },
      plots_in_progress:{
        title: string,
        description: string
      },
      plots_done:{
        title: string,
        description: string
      },
    }
  }

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
