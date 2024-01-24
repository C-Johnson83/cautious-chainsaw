const { ObjectId } = require('mongoose').Types;
const { user, thought } = require('../models');

const userController = {
  // Handles the request to get all users
  getAllUsers: async (req, res) => {
    select ( "-__v")
    try {
      const users = await user.find()//.populate('thoughts');//.populate('friends');
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  // Handles the request to create a new user
  createUser: async (req, res) => {
    try {
      const newUser = await user.create(req.body);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  },

  // Handles the request to get a specific user by ID
  getSingleUser: async (req, res) => {
    try {
      const userById = await user.findOne({_id: req.params.userId});
      console.log(userById)
      if (!userById) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(userById);
    } catch (error) {
      res.status(500).json({ error: error.message});
    }
  },

  deleteUser: async (req, res) => {
    try {
         const delUserById = await user.findOne({_id: req.params.userId});
      console.log(delUserById)
      if (!delUserById) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(delUserById);
     
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  addFriend: async (req, res) => {
    try {
   
     
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  removeFriend: async (req, res) => {
    try {
   
     
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};

module.exports = userController;
