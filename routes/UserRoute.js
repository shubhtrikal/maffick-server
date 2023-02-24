const express = require('express')
const router = express.Router()
const User = require('../models/UserModel')
const mailsent = require('../email')
const Url = require('../models/UrlModel')
const qrcode = require('qrcode')
const PaidUser = require('../models/PaidUserModel')

router.post('/register', async (req, res) => {

    const user = new User(req.body);
    console.log(user)
    await user.save()
        .then(user => {
            mailsent(user.email, `Hi ${user.name}, <br> Thank you for registering for Maffick 2023. <br> We will get back to you soon. <br> Regards, <br> Team Maffick 2023`)
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

// router.get('/getUrl', async (req, res) => {
//     let Id = new Date().getUTCMilliseconds().toString() + (Math.random() * 100).toFixed().toString()
//     await qrcode.toDataURL(`${process.env.BACKEND_URL}/user/${Id}`, {type:'terminal'})
//         .then((qr) => {
//             // mailsent(user.email, `<img src="${qr}">`)
//             console.log(qr)
//             res.status(200).send(`<img src="${qr}">`)
//         }   
//         )
//         .catch(err => {
//             console.log(err)
//         })
// })

// router.post('/getPaidUsers', async (req, res) => {
//     const data = req.body
    
//     const user = await PaidUser.findOne({ email: data.email})
    
//     if(user){
//         const url = await Url.findById(user.Url)
//         if(url){
//             await qrcode.toDataURL(url.url, {type:'terminal'})
//             .then((qr) => {
//                 mailsent(user.email, `<html><body><img src="${qr}"></body></html>`)
//                 res.status(200).send(`<img src="${qr}">`)
//             })
//             .catch(err => {
//                 console.log(err)
//             })
//         }
//         else{
//             res.status(200).json("No user found")
//         }
//     }
//     else{
//         let Id = new Date().getUTCMilliseconds().toString() + (Math.random() * 100).toFixed().toString()
//         const url = new Url({
//             url: `${process.env.BACKEND_URL}/paidUser/${Id}`,
//             status: data.status,
//             entry: false
//         })
//         await url.save()
//         const user = new PaidUser({
//             name: data.name,
//             email: data.email,
//             phone: data.phone,
//             college: data.college,
//             Url: url._id
//         })
//         await user.save()
//         await qrcode.toDataURL(url.url, {type:'terminal'})
//         .then((qr) => {
//             mailsent(user.email, `<html><body><img src="${qr}"></body></html>`)
//             res.status(200).send(`<img src="${qr}">`)
//         }
//         )
//         .catch(err => {
//             console.log(err)
//         })
//     }
// })




module.exports = router