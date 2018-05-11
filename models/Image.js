const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const ImageSchema = new Schema({
  charactername: {
    type: String,
    required: true
  },
    date: {
      type: Date,
      default: Date.Now
    }
})

module.exports = User = mongoose.model('images', ImageSchema)
