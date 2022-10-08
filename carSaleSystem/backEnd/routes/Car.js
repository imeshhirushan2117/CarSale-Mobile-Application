const express = require('express');
const router = express.Router();

const Car = require('../model/car.model');

router.get('/', async (req, res) => {
    try {
        const response = await Car.find();
        res.json(response)
    } catch (e) {
        res.send('error :' + e)
    }
})

router.post('/', async (req, res) => {
    const cars = new Car({
        regNo: req.body.regNo,
        description: req.body.description,
        brandName: req.body.brandName
    })
    try {
        const response = await cars.save();
        res.json(response)
    } catch (e) {
        res.send('error :' + e)
    }
})

router.put('/', async (req, res) => {
    try {
        const cars = await Car.find();
        for (const c of cars) {
            if (req.body.regNo === c.regNo) {
                const car = await Car.findById(c._id)
                car.regNo = req.body.regNo;
                car.description = req.body.description;
                car.brandName = req.body.brandName;
                const response = await car.save();
                res.send(response)
            }
        }

    } catch (e) {
        res.send('error :' + e)
    }
})

router.delete('/', async (req, res) => {
    try {
        const cars = await Car.find();
        for (const c of cars) {
            if (req.body.regNo === c.regNo) {
                const dlt = await Car.findById(c._id);

                const response = await dlt.remove();
                res.send(response)
            }
        }
    } catch (e) {
        res.send('error :' + e)
    }
})

module.exports = router;