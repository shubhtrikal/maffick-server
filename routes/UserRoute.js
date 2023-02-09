const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')

router.post('/register', async (req, res) => {
    const { name, email, phoneNumber, college, city } = req.body;
    // const isUser = await User.findOne({ email: email })
    // if (isUser) {
    //     return res.status(400).json({
    //         success: false,
    //         error: 'User already exists'
    //     })
    // }

    const user = new User({
        name,
        email,
        phoneNumber,
        college,
        city
    });
    console.log(user)
    await user.save()
        .then(user => {
            res.status(200).json({
                success: true,
                data: user
            })
        })
        .catch(err => {
            res.status(400).json({
                success: false,
                error: 'User already exists'
            })
        })
})

module.exports = router