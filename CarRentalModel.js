const dataCarRental = [
  { id: 1, make: 'Toyota', model: 'Camry', year: 2020, pricePerDay: 45 },
  { id: 2, make: 'Honda', model: 'Civic', year: 2019, pricePerDay: 40 },
  { id: 3, make: 'Ford', model: 'Mustang', year: 2021, pricePerDay: 70 },
  { id: 4, make: 'Chevrolet', model: 'Malibu', year: 2018, pricePerDay: 38 },
];

const CarRentalModel = {
  getAllCar: () => dataCarRental,
};

module.exports = CarRentalModel;