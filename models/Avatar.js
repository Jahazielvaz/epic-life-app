const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
  avatar1: {
    type: String,
    required: true
  },
  avatar2: {
    type: String,
    required: true
  },
  avatar3: {
    type: String,
    required: true
  },
  avatar4: {
    type: String,
    required: true
  },
})
