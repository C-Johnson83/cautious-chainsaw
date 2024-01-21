const userData = [
    'aaran' , 'aaran@email.com',
    'aaren' , 'aaren@email.com',
    'aarez' , 'aarez@email.com',
    'aarman' , 'aarman@email.com',
    'aaron' , 'aaron@email.com',
    'aaron-james' , 'aaron-james@email.com',
    'aarron' , 'aarron@email.com',
    'aaryan' , 'aaryan@email.com',
    'aaryn' , 'aaryn@email.com',
    'aayan' , 'aayan@email.com',
    'aazaan' , 'aazaan@email.com',
    'abaan' , 'abaan@email.com',
    'abbas' , 'abbas@email.com',
    'abdallah' , 'abdallah@email.com',
    'abdalroof' , 'abdalroof@email.com',
    'abdihakim' , 'abdihakim@email.com',
    'abdirahman' , 'abdirahman@email.com',
    'abdisalam' , 'abdisalam@email.com',
    'abdul' , 'abdul@email.com',
    'abdul-aziz' , 'abdul-aziz@email.com',
    'abdulbasir' , 'abdulbasir@email.com',
    'abdulkadir' , 'abdulkadir@email.com',
    'abdulkarem' , 'abdulkarem@email.com',
    'smith' , 'smith@email.com',
    'jones' , 'jones@email.com',
    'coollastname' , 'coollastname@email.com',
    'enter_name_here' , 'enter_name_here@email.com',
    'ze' , 'ze@email.com',
    'zechariah' , 'zechariah@email.com',
    'zeek' , 'zeek@email.com',
    'zeeshan' , 'zeeshan@email.com',
    'zeid' , 'zeid@email.com',
    'zein' , 'zein@email.com',
    'zen' , 'zen@email.com',
    'zendel' , 'zendel@email.com',
    'zenith' , 'zenith@email.com',
    'zennon' , 'zennon@email.com',
    'zeph' , 'zeph@email.com',
    'zerah' , 'zerah@email.com',
    'zhen' , 'zhen@email.com',
    'zhi' , 'zhi@email.com',
    'zhong' , 'zhong@email.com',
    'zhuo' , 'zhuo@email.com',
    'zi' , 'zi@email.com',
    'zidane' , 'zidane@email.com',
    'zijie' , 'zijie@email.com',
    'zinedine' , 'zinedine@email.com',
    'zion' , 'zion@email.com',
    'zishan' , 'zishan@email.com',
    'ziya' , 'ziya@email.com',
    'ziyaan' , 'ziyaan@email.com',
    'zohaib' , 'zohaib@email.com',
    'zohair' , 'zohair@email.com',
    'zoubaeir' , 'zoubaeir@email.com',
    'zubair' , 'zubair@email.com',
    'zubayr' , 'zubayr@email.com',
    'zuriel' , 'zuriel@email.com',
    'xander' , 'xander@email.com',
    'jared' , 'jared@email.com',
    'courtney' , 'courtney@email.com',
    'gillian' , 'gillian@email.com',
    'clark' , 'clark@email.com',
    'jared2' , 'jared2@email.com',
    'grace' , 'grace@email.com',
    'kelsey' , 'kelsey@email.com',
    'tamar' , 'tamar@email.com',
    'alex' , 'alex@email.com',
    'mark' , 'mark@email.com',
    'tamar2' , 'tamar2@email.com',
    'farish' , 'farish@email.com',
    'sarah' , 'sarah@email.com',
    'nathaniel' , 'nathaniel@email.com',
    'parker' , 'parker@email.com'

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
    const [username, email] = randomUserData.split(' , ');
    return { username, email };
  };

  // Function to generate random friends
  const getRandomFriends = () => {
    const numFriends = Math.floor(Math.random() * 10) + 1; // Random number of friends (1 to 10)
    const friends = [];
  
    for (let i = 0; i < numFriends; i++) {
      const randomUser = getRandomUser();
  
      // Avoid adding duplicate friends
      if (!friends.some(friend => friend.email === randomUser.email)) {
        friends.push(randomUser);
      }
    }
  
    return friends;
  };

  const getRandomThought = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thoughtName: getRandomArrItem(randomThoughts),
        
      });
    }
    return results;
  };

// Export the functions for use in seed.js
module.exports = { getRandomUser, getRandomFriends, getRandomThought };