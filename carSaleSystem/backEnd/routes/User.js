const express = require('express');
const router = express.Router();

const User = require('../model/user.model');
const app = express()

router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.send(users)
    } catch (err) {
        res.send("error :" + err)
    }
})

router.post('/', async (req, res) => {
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const response = await user.save();
        res.json(response)
    } catch (err) {
        res.send("error :" + err)
    }
})

module.exports = router