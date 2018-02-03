const express = require('express');
const router = express.Router();

// get list of ninjas from DB
router.get('/ninjas', (req, res) => {
  res.send({ type: 'GET'});
});

// add new ninja to DB
router.post('/ninjas', (req, res) => {
  res.send({ type: 'POST', body: req.body });
});

// update a ninja in DB
router.put('/ninjas/:id', (req, res) => {
  res.send({ type: 'PUT'});
});

// delete ninja from DB
router.delete('/ninjas/:id', (req, res) => {
  res.send({ type: 'DELETE'});
});

module.exports = router;