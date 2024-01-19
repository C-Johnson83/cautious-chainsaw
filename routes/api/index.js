const router = require('express').Router();
const reactionRoutes = require('./reactionRoute');
const thoughtRoutes = require('./thoughtRoute');
const userRoutes = require('./userRoute');

router.use('/reactions', reactionRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;