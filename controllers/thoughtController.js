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

      const createdThought = await thought.create(req.body); // thought gets created here no matter if a user is found
      console.log("created thought", createdThought)
      console.log('body', req.body)

      const newThought = await user.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: createdThought._id } },
        { runValidators: true, new: true }
        )
      console.log('New Data', newThought); // comes out Null

      if (!newThought) {
        return res.status(404).json({ error: " No Thought found" });
      }

      res.json(newThought);
    } catch (error) {
      res.status(400).json({ error: error.message + 'Internal Server Error' });
    }
  },

///////////////////////////////////////////////////////////////////////////////
  updateThought: async (req, res) => {
    try {
      const updateThought = await thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: req.body},
        { runValidators: true, new: true }
        )
      console.log('New Data', updateThought); // comes out Null

      if (!updateThought) {
        return res.status(404).json({ error: " No Thought found" });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },


  deleteThought: async (req, res) => {
    try {
      const delThoughtById = await thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!delThoughtById) {
        res.status(404).json({ error: 'Thought Not Found' });
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
        return res.status(404).json({ message: "No Reaction found" });
      }

      res.json(thought);
    } catch (error) {
      res.status(400).json({ error: error.message + 'Internal Server Error' });
    }
  },

///////////////////////////////////////////////////////////////////////////////
  deleteReaction: async (req, res) => {
    try {
      const delReaction = await thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
      )
      if (!delReaction) {
        return res.status(404).json({ message: "No Reaction found" });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

};


