const User = require('../models/Users');
const Thought = require('../models/Thoughts')
// const { ObjectId } = require('mongoose').Types
const { ObjectId } = require('mongoose').Types

// //get all users 
const userController = {

getUser(req, res) {
    User.find()
      .select('-__v')
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },


//Get single user by id 
getSingleUser(req,res) { 
  console.log(req.params)
    User.findOne({ _id: req.params.userId }) 
    //Populate thoughts and friend data with get single user,
    .populate('thoughts')
    .populate('friends')
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
    },

// //post/create new user 
createUser(req, res) {
  console.log(req.body)
  User.create(req.body)
    .then((users) => {
      console.log(users)
      return res.json(users) 
    })
    .catch((err) => res.status(500).json(err));
}
}
// //put/ update user by id

// //delete user by id 
// deleteUser(req, res) {

// }

//add friend 
  //find user with id 
  //add _id in id column 

//remove friend

module.exports = userController;