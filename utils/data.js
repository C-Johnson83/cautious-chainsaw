const userData = [
  { username: 'luffy', email: 'luffy@email.com' },
  { username: 'zoro', email: 'zoro@email.com' },
  { username: 'sanji', email: 'sanji@email.com' },
  { username: 'jinbe', email: 'jinbe@email.com' },
  { username: 'usopp', email: 'usopp@email.com' },
  { username: 'franky', email: 'franky@email.com' },
  { username: 'robin', email: 'robin@email.com' },
  { username: 'brook', email: 'brook@email.com' },
  { username: 'chopper', email: 'chopper@email.com' },
  { username: 'law', email: 'law@email.com' },
  { username: 'sabo', email: 'sabo@email.com' },
  { username: 'ace', email: 'ace@email.com' },
  { username: 'shanks', email: 'shanks@email.com' },
  { username: 'mihawk', email: 'mihawk@email.com' },
  { username: 'nami', email: 'nami@email.com' },
  { username: 'vivi', email: 'vivi@email.com' },
  { username: 'hancock', email: 'hancock@email.com' },
  { username: 'kid', email: 'kid@email.com' },
  { username: 'hawkins', email: 'hawkins@email.com' },
  { username: 'killer', email: 'killer@email.com' },
];

const getUser = (userData) => {
  const usersData = [];

  userData.forEach(({ username, email }) => {
    usersData.push({ username, email });
  });
  console.table(usersData);
  return usersData;
};

module.exports = { getUser, userData };