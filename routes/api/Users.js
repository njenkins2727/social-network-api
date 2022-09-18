const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
} = require('../../controllers/Users');

// /api/user
router.route('/users').get(getUser).post(createUser);

// /api/users/:userId
router.route('/users/:userId').get(getSingleUser);
// /api/users/:useId/friends


// /api/users/:userId/friends/:friendId


module.exports = router