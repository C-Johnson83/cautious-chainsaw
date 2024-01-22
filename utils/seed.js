const connection = require('../config/connection');
const { user, thought } = require('../models');
const { getRandomUser, getRandomFriends, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');

  // Delete the collections if they exist
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }
 
  let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection('thoughts');
  }

  // Create empty array to hold the users
  const users = [];

  // Loop 50 times -- add users to the users array
  for (let i = 0; i < 10; i++) {
    // Get some random friend and thought objects using helper functions
    const friends = getRandomFriends();
    const thoughts = getRandomThought(5);

    const userInfo = getRandomUser();
 
    console.log(thoughts);

   
    users.push({
      username: userInfo.username,
      email: userInfo.email,
      thoughts: userThoughts = thoughts.map(thought => ({
          thoughtText: thought.thoughtText,
        _id: thought._id,
        userName: thought.userName,
      })), // Add thought objects to the user's thoughts array
      friends: friends.map(friend => friend._id), // Add friend IDs to the user's friends array
    });
  }

  // Insert users into the 'users' collection
  const createdUsers = await user.insertMany(users);

  // Loop through created users and add thoughts to each user
  for (const user of createdUsers) {
  
    const userThoughts = getRandomThought(5, users);

    await thought.insertMany(userThoughts);
    
  }

  console.log('Seed data inserted successfully');
  process.exit(0);
});
