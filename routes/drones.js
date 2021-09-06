const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router();

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  const drones = await Drone.find();
  console.log(drones);
  res.render("drones/list", {drones});
});

router.get('/create-drone', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render('drones/create-form');
});

router.post('/create-drone', async (req, res, next) => {
  // Iteration #3: Add a new drone
  const {name, propellers, maxSpeed} = req.body;
  await Drone.create({
    name, propellers, maxSpeed
  });
  res.redirect("/drones");
});

router.get('/drones/:droneId', async (req, res, next) => {
  // Iteration #4: Update the drone
    const drone = await Drone.findById(req.params.droneId);
    res.render("drones/drone-detail", drone);
});

router.get('/drones/:droneId/edit', async (req, res, next) => {
  // Iteration #4: Update the drone
  const drone = await Drone.findById(req.params.droneId);
  res.render("drones/drone-edit", drone);
});

router.post('/drones/:droneId/edit', async (req, res, next) => {
  const {name, propellers, maxSpeed} = req.body;
    await Drone.findByIdAndUpdate(req.params.droneId, {
        name,
        propellers,
        maxSpeed,
    });
    res.redirect(`/drones/${req.params.droneId}`);
});

router.post('/drones/:droneId/delete', async (req, res, next) => {
  // Iteration #5: Delete the drone
  await Drone.findByIdAndDelete(req.params.droneId);
    res.redirect("/drones");
});

module.exports = router;
