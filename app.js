const express = require('express');
const bodyParser = require('body-parser');

// setup express app
const app = express();

// setup middleware|
app.use(bodyParser.json());

// setup routes
app.use('/api',  require('./routes/api'));

app.get('/', (req, res) => {
  res.send("Hello from api");
});

app.listen(process.env.port || 3000, () => {
  console.log(`Server is running..`);
});