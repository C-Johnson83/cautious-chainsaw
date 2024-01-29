const connection = require('../config/connection');
const {user} = require('../models');
const {getUser, userData} = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('---------------------------------------------------\nConnected to the Database!');


  // Delete the users collections if it exists
  let userCheck = await connection.db.listCollections({ name: 'users' }).toArray();
  if (userCheck.length) {
    await connection.dropCollection('users');
  }
// Delete the thoughts collections if it exists
  let thoughtsCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
  if (thoughtsCheck.length) {
    await connection.dropCollection('thoughts');
  }

  // Add the users from the data array to the collection
  const users = getUser(userData);
  await user.insertMany(users);
  
  console.log('---------------------------------------------------\n'+
  '|     "Data collections have been cleared"        |\n'+
  '|   "User data has been successfully seeded"      |\n'+
  '|  "Ready to input new user data in JSON format"  |\n'+
  '---------------------------------------------------');
  process.exit(0);
});
