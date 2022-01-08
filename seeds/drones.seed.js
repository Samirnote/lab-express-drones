// Iteration #1
require("../db/index.js");

const Drone = require("../models/Drone.model");

const Drones = [
	{
		name: "smallone",
		propellers: "3",
		maxSpeed: 30,
	},
	{
		name: "mediumone",
		propellers: "4",
		maxSpeed: 40,
	},
	{
		name: "bigestone",
		propellers: "5",
		maxSpeed: 50,
	},
];


(async function () {
	try {
		const createdDrones = await Drone.create(Drones);
		console.log(`Just created ${createdDrones.length}`);
		process.exit();
        
	} catch (err) {
		console.error(err);
		process.exit();
	}
})();