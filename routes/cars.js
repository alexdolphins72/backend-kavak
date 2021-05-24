const express = require('express');
const router = express.Router();
const carsController = require('../controllers/carsController');

router.get('/',
    carsController.getCars
)

router.get('/filter',
    carsController.filterCars
)

router.post('/',
    carsController.newCar
)

router.put('/:id',
    carsController.updateCar
)

router.delete('/:id',
    carsController.deleteCar
)

module.exports = router;