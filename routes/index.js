const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const db = require('../config/db')

const Url = require('../models/url')
const update = require('./update')

router.get('/:code', async (req, res) => {
    try {
        const url = await Url.findOne({ urlCode: req.params.code })
       
        if (url) {
           
            return res.redirect(url.longUrl)

        } else {
            return res.status(404).json('No url found')
        }
    } catch (err) {
        console.error(err)
        res.status(500).json('Server Error')
    }
})

module.exports = router