export class UsersTable {
  public static users: any = [
    {
      id: 1,
      username: 'admin',
      password: 'Stuff123!',
      email: 'admin@thecompendium.com',
      accessToken: 'access-token-8f3ae836da744329a6f93bf20594b5cc',
      refreshToken: 'access-token-f8c137a2c98743f48b643e71161d90aa',
      roles: [1], // Administrator
      pic: './assets/media/users/300_25.jpg',
      fullname: 'Administrator',
      occupation: 'CEO',
      companyName: 'The Compendium',
      phone: '456669067890',
      address: {
        addressLine: 'L-12-20 Vertex, Cybersquare',
        city: 'San Francisco',
        state: 'California',
        postCode: '45000'
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/admin',
        facebook: 'https://facebook.com/admin',
        twitter: 'https://twitter.com/admin',
        instagram: 'https://instagram.com/admin'
      }
    },
    {
      id: 2,
      username: 'dungeon_master',
      password: 'Stuff123!',
      email: 'dungeon_master@thecompendium.com',
      accessToken: 'access-token-6829bba69dd3421d8762-991e9e806dbf',
      refreshToken: 'access-token-f8e4c61a318e4d618b6c199ef96b9e55',
      roles: [2], // Dungeon Master
      pic: './assets/media/users/100_2.jpg',
      fullname: 'Dungeon Master',
      occupation: 'Deputy Head of Keenthemes in New York office',
      companyName: 'The Compendium',
      phone: '456669067891',
      address: {
        addressLine: '3487  Ingram Road',
        city: 'Greensboro',
        state: 'North Carolina',
        postCode: '27409'
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/dungeon_master',
        facebook: 'https://facebook.com/dungeon_master',
        twitter: 'https://twitter.com/dungeon_master',
        instagram: 'https://instagram.com/dungeon_master'
      }
    },
    {
      id: 3,
      username: 'player',
      password: 'Stuff123!',
      email: 'player@thecompendium.com',
      accessToken: 'access-token-d2dff7b82f784de584b60964abbe45b9',
      refreshToken: 'access-token-c999ccfe74aa40d0aa1a64c5e620c1a5',
      roles: [3], // Player
      pic: './assets/media/users/default.jpg',
      fullname: 'Player',
      occupation: 'CFO',
      companyName: 'The Compendium',
      phone: '456669067892',
      address: {
        addressLine: '1467  Griffin Street',
        city: 'Phoenix',
        state: 'Arizona',
        postCode: '85012'
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/player',
        facebook: 'https://facebook.com/player',
        twitter: 'https://twitter.com/player',
        instagram: 'https://instagram.com/player'
      }
    },
    {
      id: 4,
      username: 'nick',
      password: 'Stuff123!',
      email: 'nick@thecompendium.com',
      accessToken: 'access-token-7dhdh1723jkk23828381238jdfj81283j',
      refreshToken: 'access-token-234jfjs34j393jjsf3asjkf123490fja',
      roles: [2], // Dungeon Master
      pic: './assets/media/users/300_25.jpg',
      fullname: 'Nick B.',
      occupation: 'Mohawk College Student',
      companyName: 'The Compendium',
      phone: '456669067890',
      address: {
        addressLine: 'L-12-20 Vertex, Cybersquare',
        city: 'San Francisco',
        state: 'California',
        postCode: '45000'
      },
      socialNetworks: {
        linkedIn: 'https://linkedin.com/admin',
        facebook: 'https://facebook.com/admin',
        twitter: 'https://twitter.com/admin',
        instagram: 'https://instagram.com/admin'
      }
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
