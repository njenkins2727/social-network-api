const User = require('../models/Users');

// const { ObjectId } = require('mongoose').Types
const { ObjectId } = require('mongoose').Types

// //get all users 
const getUser = function (req, res) {
    User.find()
    .then(async (users) => {
        const userObj = {
            users
        }
       return res.json(userObj);
    })
}

//Get single user by id 
const getSingleUser = function(req,res) {
    User.findOne({ _id: req.params.UserID })
    //Populate thoughts and friend data to get single user,
    .populate('thoughts,')
    .populate('friends,')
    .then(async (users) =>
        !users
          ? res.status(404).json({ message: 'No users with that ID' })
          : res.json({
              users,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
    }

// //post/create  new user 
const createUser = function (req, res) {
  User.create(req.body)
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
}
// //put/ update user by id

// //delete user by id 

module.exports = {
    getUser,
    getSingleUser,
    createUser,
}