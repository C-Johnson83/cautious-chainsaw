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
      const thoughtById = await thought.findOne({_id: req.params.thoughtId})
          .select ( "-__v");
        console.log(thoughtById)
        if (!thoughtById) {
          res.status(404).json({ error: 'thought not found' });
          return;
        }
        res.json(thoughtById);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  createThought: async (req, res) => {
    try {
   const newThought = await thought.create(req.body)
   res.status(201).json(newThought)
    } catch (error) {
      res.status(400).json({ error: 'Internal Server Error' });
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
      const delThoughtById = await thought.findOne({_id: req.params.thoughtId});
   console.log(delThoughtById)
   if (!delThoughtById) {
     res.status(404).json({ error: 'thought not found' });
     return;
   }
   res.json(delThoughtById);
  
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


