const express = require('express');
const Thoughts = require('./models/thoughts');
require('./config/connection')
// const routes = require('./routes');

const thought = new Thoughts({
  text:'beanburrito',
  username:'mynameiscool',
  reaction: [
    {
      body: 'love it',
      username: 'averagespy',
    }
  ]
})
thought.save().then(console.log);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(routes);

// sync sequelize models to the database, then turn on the server
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });

