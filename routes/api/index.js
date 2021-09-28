const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

//Set the route in the URL for the controllers
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;