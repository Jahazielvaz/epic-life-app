const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  image: {
    type: String,
    required: true
  },
})
