const express = require('express')
const router = express.Router()

const Url = require('../models/url')

router.put('/shorten', async (req, res) => {
  const { count } = req.body;

  console.log(count)
})

module.exports = router 