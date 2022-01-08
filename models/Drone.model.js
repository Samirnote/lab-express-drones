// Iteration #1
const { model, Schema } = require("mongoose");

const DroneSchema = new Schema({
	name: String,
	propellers: Number,
	maxSpeed: Number,
});

const Drone = model("Drones", DroneSchema);

module.exports = Drone;

