const express = require('express');
const router = express.Router();
const Ninja = require('../models/ninja');

// get list of ninjas from DB
router.get('/ninjas', (req, res, next) => {
  // Ninja.find({}).then((ninjas) => {
  //   res.send({ninjas});
  // });

  Ninja.aggregate([
    {
      $geoNear: {
        near: {
          type: "Point", coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        distanceField: "dist.calculated",
        maxDistance: 100000,
        spherical: true
      }
    }
  ]).then((data) => {
    res.send(data);
  })
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
  const id = req.params.id;
  Ninja.findByIdAndUpdate(id, req.body).then(() => {

    var ninja = Ninja.findById(id).then((ninja) => {
      res.send({ninja: ninja})
    }).catch(next);
  }).catch(next);
});

// delete ninja from DB
router.delete('/ninjas/:id', (req, res, next) => {
  const id = req.params.id;
  Ninja.findByIdAndRemove(id).then((ninja) => {
    if (ninja) res.send({ninja: ninja});

    throw Error("Ninja was not found in DB!");
  }).catch(next);
});

module.exports = router;