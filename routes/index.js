const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => res.send(`<div>

Wrong route Dood!</div>`));

module.exports = router;