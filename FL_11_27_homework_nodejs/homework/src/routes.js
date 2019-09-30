const express = require('express');
const routes = express.Router();

const data = require('../db/data.json');
const CarHandler = require('./handlers/car');
const delAuth = require('./middlewares/delete-authorization');

routes.get('/', (req, res) => {
    res.status(200).send(data);
});

routes.get('/:id', (req, res) => {
    const car = data.find((carItem) => carItem.id == req.params.id);
    if (car) {
        return res.status(200).send(car);
    } else {
        return res.status(404).send({
            message: "There are no car with this id"
        });
    }
});

routes.post('/', (req, res) => {
    const addCar = new CarHandler(req.body);
    const car = data.find(carItem => carItem.brand === addCar.brand);
    if (car) {
        res.status(409).send({
            "message": "Car already exists."
        });
    }

    data.push(addCar);
    res.status(201).send(addCar);
});

routes.put('/:id', (req, res) => {
    const id = req.params.id;
    const updatedCar = req.body;
    const carIndex = data.findIndex((car) => car.id == id);
    const car = data[carIndex];
    if (car) {
        data.splice(carIndex, 1, {
            ...car,
            ...updatedCar
        });
        return res.status(200).send({
            ...car,
            ...updatedCar
        });
    } else {
        return res.status(404)
    }
});

routes.delete('/:id', delAuth, (req, res) => {
    const carIndex = data.find((car) => car.id == req.params.id);

    if (!carIndex) {
        return res.status(404);
    }
    data.splice(carIndex, 1);
    res.status(200).send({
        "message": "The car has been successfully removed"
    })
});

module.exports = routes;