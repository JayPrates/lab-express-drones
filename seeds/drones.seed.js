// Iteration #1
require("../db");
const Drone = require("../models/Drone.model");

const drones = [
    {
        name: "Anacleto",
        propellers: 4,
        maxSpeed: 100,
    },
    {
        name: "Inacio",
        propellers: 6,
        maxSpeed: 150,
    },
    {
        name: "Joaquim",
        propellers: 2,
        maxSpeed: 50,
    }
];

Drone.insertMany(drones).then((dronesFromDB) => {
    console.log(`Drones creates - ${dronesFromDB.length}`);
});