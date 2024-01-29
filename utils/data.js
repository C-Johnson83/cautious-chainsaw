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
  { username: 'crocodile', email: 'crocodile@email.com' },
  { username: 'doflamingo', email: 'doflamingo@email.com' },
  { username: 'kaido', email: 'kaido@email.com' },
  { username: 'bigmom', email: 'bigmom@email.com' },
  { username: 'whitebeard', email: 'whitebeard@email.com' },
  { username: 'blackbeard', email: 'blackbeard@email.com' },
  { username: 'kizaru', email: 'kizaru@email.com' },
  { username: 'akainu', email: 'akainu@email.com' },
  { username: 'nami', email: 'nami@email.com' },
  { username: 'vivi', email: 'vivi@email.com' },
  { username: 'shirahoshi', email: 'shirahoshi@email.com' },
  { username: 'hancock', email: 'hancock@email.com' },
  { username: 'barto', email: 'barto@email.com' },
  { username: 'cavendish', email: 'cavendish@email.com' },
  { username: 'jimbei', email: 'jimbei@email.com' },
  { username: 'doffy', email: 'doffy@email.com' },
  { username: 'kid', email: 'kid@email.com' },
  { username: 'apoo', email: 'apoo@email.com' },
  { username: 'hawkins', email: 'hawkins@email.com' },
  { username: 'killer', email: 'killer@email.com' },
  { username: 'bonney', email: 'bonney@email.com' },
  { username: 'roger', email: 'roger@email.com' },
  { username: 'garb', email: 'garb@email.com' },
  { username: 'sengoku', email: 'sengoku@email.com' },
  { username: 'smoker', email: 'smoker@email.com' },
  { username: 'garp', email: 'garp@email.com' },
];

const getUser = (userData) => {
  const usersData = [];

  userData.forEach(({ username, email }) => {
    usersData.push({ username, email });
  });

  return usersData;
};

module.exports = { getUser, userData };