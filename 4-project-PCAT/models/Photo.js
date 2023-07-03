const { Schema, model } = require('mongoose');

const PhotoSchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

const Photo = model('photo', PhotoSchema);

module.exports = Photo;
