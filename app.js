const express = require('express');

// setup express app
const app = express();

// setup routes
app.use('/api',  require('./routes/api'));

app.get('/', (req, res) => {
  res.send("Hello from api");
});

app.listen(process.env.port || 3000, () => {
  console.log(`Server is running..`);
});