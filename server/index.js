require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser')
const cors = require('cors')

const app = express();

/* Start All General Middlewares */  
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))

  // parse application/json
  app.use(bodyParser.json())
  
  // Enable CORS 
  app.use(cors())
/* End All General Middlewares */

/* Start Database Configurations */
  const PORT = process.env.PORT || 5000;
  const databaseUrl = process.env.MONGO_DB_URL;

  // Connect to Database
  mongoose.connect(databaseUrl);
/* End Database Configurations */

app.all('/', (req, res) => {
  res.send('Server is Working');
});

/* Start Routes */
  app.use('/api/users', require('./routes/user-routes.js'));
  app.use('/api/contents', require('./routes/content-routes.js'));
/* End Routes */

app.listen(PORT, () => console.log(`This app is listening on port ${PORT}.`));