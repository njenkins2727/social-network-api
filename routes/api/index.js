const router = require('express').Router();
const UsersRoutes = require('./courseRoutes');
const ThoughtsRoutes = require('./thoughtsRoutes');

router.use('/Users', UsersRoutes);
router.use('/Thoughts', ThoughtsRoutes);

module.exports = router;