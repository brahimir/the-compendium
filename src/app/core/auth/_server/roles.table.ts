export class RolesTable {
  public static roles: any = [
    {
      id: 1,
      title: 'Administrator',
      isCoreRole: true,
      permissions: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
    },
    {
      id: 2,
      title: 'Dungeon Master',
      isCoreRole: false,
      permissions: [13]
    },
    {
      id: 3,
      title: 'Player',
      isCoreRole: false,
      permissions: []
    }
  ];
}
