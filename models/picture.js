import mongoose from 'mongoose'
import pictureSchema from '../schemas/picture'


module.exports = mongoose.model("Picture",pictureSchema);