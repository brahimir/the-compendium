export class UsersTable {
  public static users: any = [
    {
      id: 1,
      username: 'admin',
      password: 'Stuff123!',
      email: 'admin@tc.com',
      accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
      refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
      roles: [1], // Administrator
      fullname: 'Administrator',
    },
    {
      id: 2,
      username: 'dungeon_master',
      password: 'Stuff123!',
      email: 'dungeon_master@tc.com',
      accessToken: 'access-token-6829bba69dd3421d8762-991e9e806dbf',
      refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9e55',
      roles: [2], // Dungeon Master
      fullname: 'Dungeon Master',

    },
    {
      id: 3,
      username: 'player',
      password: 'Stuff123!',
      email: 'player@tc.com',
      accessToken: 'access-token-d2dff7b82f784de584b60964abbe45b9',
      refreshToken: 'access-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
      roles: [3], // Player
      fullname: 'Player',
    },
    {
      id: 4,
      username: 'nick',
      password: 'Stuff123!',
      email: 'nick@tc.com',
      accessToken: 'access-token-7dhdh1723jkk23828381238jdfj81283j',
      refreshToken: 'access-token-234jfjs34j393jjsf3asjkf123490fja',
      roles: [2], // Dungeon Master
      fullname: 'Nick',
    },
    {
      id: 5,
      username: 'pammy',
      password: 'boop',
      email: 'pammy@tc.com',
      accessToken: 'access-token-123nj2k3n245192m231232k3m2904512m31',
      refreshToken: 'access-token-455jsf903mrf923msfm903m99tr3kmm10a',
      roles: [2], // Dungeon Master
      fullname: 'Pam',
    },
  ];

  public static tokens: any = [
    {
      id: 1,
      accessToken: 'access-token-' + Math.random(),
      refreshToken: 'access-token-' + Math.random()
    }
  ];
}
