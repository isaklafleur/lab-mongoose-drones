const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/drones-dev', {
  keepAlive: true,
  reconnectTries: Number.MAX_VALUE,
  useMongoClient: true,
});

const Drone = require('../models/drone');

const drones = [
  {
    droneName: 'Drone1',
    propellers: '8',
    maxSpeed: 20,
  },
  {
    droneName: 'Drone2',
    propellers: '5',
    maxSpeed: 30,
  },
  {
    droneName: 'Drone3',
    propellers: '4',
    maxSpeed: 14,
  },
];

Drone.create(drones, (err, res) => {
  if(err) {
    console.log(err);
  } else {
    console.log(res);
    mongoose.connection.close();
  }
});