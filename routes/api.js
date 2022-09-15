const User = require('../models/user');

const router = require('express').Router();

router.get('/user', (req, res) => {

//get all users 
 User.find({})
    .populate('thoughts,')
    .populate('friends,')
    .then((users) => {
        res.json(users)
    })

})


//get single user by id 
  //populate thoughts and frien data 

//post/create  new user 

module.exports = router