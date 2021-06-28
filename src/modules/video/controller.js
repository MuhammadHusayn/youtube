const path = require('path')
const {getVideo} = require('./model')

const GET = (req, res) => {
    res.json(getVideo())
}

module.exports = {GET}