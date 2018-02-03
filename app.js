const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Hello from api");
});

app.listen(process.env.port || 3000, () => {
  console.log(`Server is running..`);
})