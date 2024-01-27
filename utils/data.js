const { Types } = require('mongoose');

const userData = [
  { username: 'aaran', email: 'aaran@email.com' },
  { username: 'aaren', email: 'aaren@email.com' },
  { username: 'aarez', email: 'aarez@email.com' },
  { username: 'aarman', email: 'aarman@email.com' },
  { username: 'aaron', email: 'aaron@email.com' },
  { username: 'aaron-james', email: 'aaron-james@email.com' },
  { username: 'aarron', email: 'aarron@email.com' },
  { username: 'aaryan', email: 'aaryan@email.com' },
  { username: 'aaryn', email: 'aaryn@email.com' },
  { username: 'aayan', email: 'aayan@email.com' },
  { username: 'aazaan', email: 'aazaan@email.com' },
  { username: 'abaan', email: 'abaan@email.com' },
  { username: 'abbas', email: 'abbas@email.com' },
  { username: 'abdallah', email: 'abdallah@email.com' },
  { username: 'abdalroof', email: 'abdalroof@email.com' },
  { username: 'abdihakim', email: 'abdihakim@email.com' },
  { username: 'abdirahman', email: 'abdirahman@email.com' },
  { username: 'abdisalam', email: 'abdisalam@email.com' },
  { username: 'abdul', email: 'abdul@email.com' },
  { username: 'abdul-aziz', email: 'abdul-aziz@email.com' },
  { username: 'abdulbasir', email: 'abdulbasir@email.com' },
  { username: 'abdulkadir', email: 'abdulkadir@email.com' },
  { username: 'abdulkarem', email: 'abdulkarem@email.com' },
  { username: 'smith', email: 'smith@email.com' },
  { username: 'jones', email: 'jones@email.com' },
  { username: 'coollastname', email: 'coollastname@email.com' },
  { username: 'enter_name_here', email: 'enter_name_here@email.com' },
  { username: 'ze', email: 'ze@email.com' },
  { username: 'zechariah', email: 'zechariah@email.com' },
  { username: 'zeek', email: 'zeek@email.com' },
  { username: 'zeeshan', email: 'zeeshan@email.com' },
  { username: 'zeid', email: 'zeid@email.com' },
  { username: 'zein', email: 'zein@email.com' },
  { username: 'zen', email: 'zen@email.com' },
  { username: 'zendel', email: 'zendel@email.com' },
  { username: 'zenith', email: 'zenith@email.com' },
  { username: 'zennon', email: 'zennon@email.com' },
  { username: 'zeph', email: 'zeph@email.com' },
  { username: 'zerah', email: 'zerah@email.com' },
  { username: 'zhen', email: 'zhen@email.com' },
  { username: 'zhi', email: 'zhi@email.com' },
  { username: 'zhong', email: 'zhong@email.com' },
  { username: 'zhuo', email: 'zhuo@email.com' },
  { username: 'zi', email: 'zi@email.com' },
  { username: 'zidane', email: 'zidane@email.com' },
  { username: 'zijie', email: 'zijie@email.com' },
  { username: 'zinedine', email: 'zinedine@email.com' },
  { username: 'zion', email: 'zion@email.com' },
  { username: 'zishan', email: 'zishan@email.com' },
  { username: 'ziya', email: 'ziya@email.com' },
  { username: 'ziyaan', email: 'ziyaan@email.com' },
  { username: 'zohaib', email: 'zohaib@email.com' },
  { username: 'zohair', email: 'zohair@email.com' },
  { username: 'zoubaeir', email: 'zoubaeir@email.com' },
  { username: 'zubair', email: 'zubair@email.com' },
  { username: 'zubayr', email: 'zubayr@email.com' },
  { username: 'zuriel', email: 'zuriel@email.com' },
  { username: 'xander', email: 'xander@email.com' },
  { username: 'jared', email: 'jared@email.com' },
  { username: 'courtney', email: 'courtney@email.com' },
  { username: 'gillian', email: 'gillian@email.com' },
  { username: 'clark', email: 'clark@email.com' },
  { username: 'jared2', email: 'jared2@email.com' },
  { username: 'grace', email: 'grace@email.com' },
  { username: 'kelsey', email: 'kelsey@email.com' },
  { username: 'tamar', email: 'tamar@email.com' },
  { username: 'alex', email: 'alex@email.com' },
  { username: 'mark', email: 'mark@email.com' },
  { username: 'tamar2', email: 'tamar2@email.com' },
  { username: 'farish', email: 'farish@email.com' },
  { username: 'sarah', email: 'sarah@email.com' },
  { username: 'nathaniel', email: 'nathaniel@email.com' },
  { username: 'parker', email: 'parker@email.com' }
];

  const randomThoughts = [
    'Life is a journey that must be traveled no matter how bad the roads and accommodations.',
    'The only impossible journey is the one you never begin.',
    'Don\'t watch the clock; do what it does. Keep going.',
    'Believe you can and you\'re halfway there.',
    'It always seems impossible until it’s done.',
    'The only way to do great work is to love what you do.',
    'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.',
    'Success is not final, failure is not fatal: It is the courage to continue that counts.',
    'You are never too old to set another goal or to dream a new dream.',
    'Your attitude, not your aptitude, will determine your altitude.',
    'Don’t watch the clock; do what it does. Keep going.',
    'The only limit to our realization of tomorrow will be our doubts of today.',
    'If you want to achieve greatness stop asking for permission.',
    'The only way to achieve the impossible is to believe it is possible.',
    'Strive not to be a success, but rather to be of value.',
    'The only thing standing between you and your goal is the story you keep telling yourself as to why you can\'t achieve it.',
    'Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.',
    'What lies behind us and what lies before us are tiny matters compared to what lies within us.',
    'Success is stumbling from failure to failure with no loss of enthusiasm.',
    'It’s not about how hard you hit. It’s about how hard you can get hit and keep moving forward.'
  ];
  
  // Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full user name
const getRandomUser = () => {
  const randomUserData = getRandomArrItem(userData);

  
  const { username, email } = randomUserData;
  
  return { username, email };
};

  // Function to generate random friends
  const getRandomFriends = () => {
    const numFriends = Math.floor(Math.random() * 10) + 1; // Random number of friends (1 to 10)
    const friends = [];
  
    for (let i = 0; i < numFriends; i++) {
      const randomUser = getRandomUser();
 
      // Avoid adding duplicate friends
      // if (!friends.some(friend => friend.email === randomUser.email)) {
        friends.push({
          username: randomUser.username,
          _id: new Types.ObjectId(),
          email: randomUser.email
        });
      // }
    }
 
    return friends;
  };

  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      const nameNumber = Math.random();
      results.push({
        _id: new Types.ObjectId(), 
        userName: Math.floor(nameNumber*100000),
        thoughtText: getRandomArrItem(randomThoughts),
        
      });
    }
  
    return results;
  };

// Export the functions for use in seed.js
module.exports = {getRandomUser, getRandomFriends, getRandomThought };