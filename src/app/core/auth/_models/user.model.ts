import { BaseModel } from '../../_base/crud';

export class User extends BaseModel {
  _id: string;
  username: string;
  password: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  roles: number[];
  fullName: string;
  userSettings: {
    dashboard: string[],
    storyboard: {
      plotsMain:{
        title: string,
        description: string
      },
      plotsInProgress:{
        title: string,
        description: string
      },
      plotsDone:{
        title: string,
        description: string
      },
    }
  }

  clear(): void {
    this._id = undefined;
    this.username = '';
    this.password = '';
    this.email = '';
    this.roles = [];
    this.fullName = '';
    this.accessToken = 'access-token-' + Math.random();
    this.refreshToken = 'access-token-' + Math.random();
  }
}
