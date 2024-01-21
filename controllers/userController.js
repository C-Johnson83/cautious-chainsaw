const { ObjectId } = require('mongoose').Types;
const { user, thought } = require('../models');

const userController = {
  // Handles the request to get all users
  getAllUsers: async (req, res) => {
    try {
      const users = await user.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
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
      const user = await user.findById(req.params.userId);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  deleteUser: async (req, res) => {
    try {
   
     
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
