const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
  avatar1: {
    type: String,
    required: true
  },
})
