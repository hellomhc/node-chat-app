const expect = require('expect');

const { Users } = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: '1',
        name: 'user01',
        room: 'room01'
      },
      {
        id: '2',
        name: 'user02',
        room: 'room02'
      },
      {
        id: '3',
        name: 'user03',
        room: 'room01'
      }
    ];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '4',
      name: 'user04',
      room: 'room04'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '2';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '99';
    var user = users.removeUser(userId);

    expect(user).toBeUndefined();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '2';
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it('should not find user', () => {
    var userId = '99';
    var user = users.getUser(userId);

    expect(user).toBeUndefined();
  });

  it('should return names for room01', () => {
    var userList = users.getUserList('room01');

    expect(userList).toEqual(['user01', 'user03']);
  });

  it('should return names for room02', () => {
    var userList = users.getUserList('room02');

    expect(userList).toEqual(['user02']);
  });
});
