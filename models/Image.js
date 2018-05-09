const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  charactername: {
    type: String,
    required: true
  },
})
