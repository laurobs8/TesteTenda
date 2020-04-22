const express = require('express')
const router = express.Router()

const validUrl = require('valid-url')
const shortid = require('shortid')
const config = require('config')

const Url = require('../models/url')

router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = config.get('baseUrl')

  //checa baseurl
  if (!validUrl.isUri(baseUrl)) {
    res.status(401).json('Invalid base URL')
  }

  // cria url
  const urlCode = shortid.generate()

  // url longo
  if (validUrl.isUri(longUrl)) {
    try {
      let url = await Url.findOne({ longUrl })

      if (url) {
        res.json(url)
      } else {
        let shortUrl = baseUrl + '/' + urlCode

        url = new Url({
          longUrl,
          shortUrl,
          urlCode,
          count: 1,
          date: new Date()
        })
        await url.save()
        res.json(url)
      }

    } catch (error) {
      console.error(error)
      res.status(500).json('Erro no Servidor')
    }
  } else {
    res.status(401).json(" Url longa invalida")
  }

})

module.exports = router 