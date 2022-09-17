const express = require('express');
const { default: mongoose } = require('mongoose');
const { route } = require('./routes/api/Users');
require('./config/connection')
const apiRoutes = require('./routes/api/Users');
//testing thought model
// const thought = new Thoughts({
//   text:'hello people',
//   username:'mynameiscool',
//   reaction: [
//     {
//       body: 'hey dude',
//       username: 'stranger',
//     }
//   ]
// })
// thought.save().then(console.log);



const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

// sync sequelize models to the database, then turn on the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

