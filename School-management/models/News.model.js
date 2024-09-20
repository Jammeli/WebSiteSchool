const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  datetime: {
    type: Date,
    default: Date.now,
  },
  image: {
    type: String,
    required: true, // URL of the image stored in Cloudinary
  },
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
