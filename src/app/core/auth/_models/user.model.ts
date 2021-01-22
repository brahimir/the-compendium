export class User {
  _id?: string;
  username: string;
  password: string;
  email: string;
  accessToken: string;
  refreshToken: string;
  roles: number[];
  fullName: string;
  userSettings = {
    dashboard: [],
    dmTools: {
      campaigns: [],
      storyboard: {
        plotsMain: [],
        plotsInProgress: [],
        plotsDone: [],
      },
      sessions: [],
    },
    userProfile: {},
  };

  constructor(
    username: string,
    password: string,
    email: string,
    roles: number[],
    fullName: string,
    accessToken?: string,
    refreshToken?: string,
    _id?: string,
    userSettings?: {
      dashboard: Object[];
      dmTools: {
        campaigns: Object[];
        storyboard: {
          plotsMain: Object[];
          plotsInProgress: Object[];
          plotsDone: Object[];
        };
        sessions: Object[];
      };
      userProfile: Object;
    }
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.roles = roles;
    this.fullName = fullName;
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this._id = _id;

    // Usually new users will have empty user settings (default)
    if (userSettings) {
      this.userSettings = userSettings;
    }
  }

  clear(): void {
    this._id = undefined;
    this.username = "";
    this.password = "";
    this.email = "";
    this.accessToken = "access-token-" + Math.random();
    this.refreshToken = "access-token-" + Math.random();
    this.roles = [];
    this.fullName = "";
    this.userSettings = undefined;
  }
}
