const express = require('express');
const async = require('hbs/lib/async');
const router = express.Router();
const Drone = require("../models/Drone.model");
// require the Drone model here

router.get('/drones', (req, res, next) => {
  Drone.find()
  .then((dbResponse) => {
    console.log("Database response:", dbResponse);
    res.render("drones/list.hbs", {
      Drones : dbResponse,
    });
  })
  .catch((e) => console.error(e));
});
  


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");

});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name, propellers, maxSpeed} = req.body;
  Drone.create(req.body)
		.then((newDrone) => {
			console.log("Newdrone: ", newDrone);
			res.redirect("/drones");
		})
		.catch((e) => console.error(e));

});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone
    .findById(req.params.id)
    .then((drone) =>
      res.render("drones/update-form.hbs", { droneToEdit: drone })
    )
    .catch(next);
});

router.post('/drones/:id/edit', async(req, res, next) => {
  // Iteration #4: Update the drone
  try {
    await Drone.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.get('/drones/:id/delete', (req, res, next) => {
 
  Drone
    .findById(req.params.id)
    .then((drone) =>
  res.render("drones/delete-form.hbs",{ droneToDelete: drone })
  )
    .catch(next);

});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params;
  console.log(req.params.id === id);
    
  Drone.findByIdAndRemove(id)
    
    .then((success) => res.redirect("/drones"))
    .catch(next);
});

module.exports = router;
