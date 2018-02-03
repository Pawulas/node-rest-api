const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


// setup express app
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/ninjago');
mongoose.Promise = global.Promise;

// setup middleware|
app.use(bodyParser.json());

// setup routes
app.use('/api',  require('./routes/api'));


// error handling middleware
app.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

app.get('/', (req, res) => {
  res.send("Hello from api");
});

app.listen(process.env.port || 3000, () => {
  console.log(`Server is running..`);
});