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
      const thoughtById = await thought.findOne({ _id: req.params.thoughtId })
        .select("-__v");
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
      console.log("Request Body:", req.body);

      const createdThought = await thought.create(req.body);
      console.log("created thought", createdThought)

      const newThought = await user.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: createdThought._id } },
        { runValidators: true, new: true }
      );

      if (!newThought) {
        return res.status(404).json({ error:error.message +" No User found" });
      }

      res.json(newThought);
    } catch (error) {
      res.status(400).json({ error: error.message + 'Internal Server Error' });
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
      const delThoughtById = await user.findOne({ _id: req.params.userId });
     
      if (!delThoughtById) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.json(delThoughtById);

    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  createReaction: async (req, res) => {
    try {
      const newReaction = await thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      );

      if (!newReaction) {
        return res.status(404).json({ message: "No User found" });
      }

      res.json(thought);
    } catch (error) {
      res.status(400).json({ error: error.message + 'Internal Server Error' });
    }
  },


  deleteReaction: async (req, res) => {
    try {

    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

};


