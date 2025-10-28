const express = require('express');
const carRentalController = require('../controllers/CarRentalController');
const apiCarRentalRouter = express.Router();

apiCarRentalRouter.get('/carrental', carRentalController.handleGetCar);

module.exports = apiCarRentalRouter;