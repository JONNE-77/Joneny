const CarRentalModel = require('../models/CarRentalModel');

const handleGetCar = (req, res) => {
  const carsData = CarRentalModel.getAllCar();
  res.json(carsData);
};

const carRentalController = {
  handleGetCar,
};

module.exports = carRentalController;