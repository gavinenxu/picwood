const mongoose = require('mongoose')
const pictureSchema = require('../schemas/picture')


module.exports = mongoose.model("Picture",pictureSchema);