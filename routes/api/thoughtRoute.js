const router = require('express').Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

router.route('/:userId/thoughts').post(createThought);

// /api/thoughts/:thoughtId
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions').post(createReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by ID
router.route('/:thoughtId/reactions/:reactionId').put(deleteReaction);

module.exports = router;