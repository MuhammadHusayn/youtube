const express = require('express')
const {GET} = require('./controller')

const videoRoute = express.Router()
videoRoute.route('/videos')
    .get(GET)

module.exports = videoRoute