const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'field is mandatory']
  },
  _id: {
    type: String
  },
  description: {
    type: String,
  },

  publishedAt: {
    type: Date,
    required: [true, 'field is mandatory']
  }
});

videoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
    if (document.description === null || document.description === undefined) {
      document.description = "";
    }
  },
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
