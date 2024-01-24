const { user, thought } = require('../models');

module.exports = {

  // Handles the request to get all thoughts
  getAllThoughts: async (req, res) => {
    try {
      const thoughts = await thought.find();
      res.json(thoughts);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  getSingleThought: async (req, res) => {
    try {
     
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  createThought: async (req, res) => {
    try {
   
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  updateThought: async (req, res) => {
    try {
    
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  deleteThought: async (req, res) => {
    try {
     
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  createReaction: async (req, res) => {
    try {
    
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  deleteReaction: async (req, res) => {
    try {
     
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

};


