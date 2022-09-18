const router = require('express').Router();
const {
    getUser,
    getSingleUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
} = require('../../controllers/Users');

// /api/user
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser)
// /api/users/:useId/friends/:friendsId
router.route('/:userId/friends/:friendsId').post(addFriend)

module.exports = router