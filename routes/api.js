const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get list of ninjas from DB
router.get('/ninjas', (req, res, next) => {
  res.send({ type: 'GET'});
});

// add new ninja to DB
router.post('/ninjas', (req, res, next) => {

  Ninja.create(req.body).then((result) => {
    res.send({status: "OK", data: result});
  }).catch(next);

  // let ninja = new Ninja(req.body);

  // ninja.save().then((reponse => {
  //  res.send({ type: 'POST', body: response });
  // }));
});

// update a ninja in DB
router.put('/ninjas/:id', (req, res, next) => {
  res.send({ type: 'PUT'});
});

// delete ninja from DB
router.delete('/ninjas/:id', (req, res, next) => {
  res.send({ type: 'DELETE'});
});

module.exports = router;