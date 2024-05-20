const { Schema, model } = require('mongoose');

const BlogSchema = new Schema({
  title: {
    type: String,
    require: [true, 'title is required'],
  },
  description: {
    type: String,
    require: [true, 'description is required'],
  },
  date: {
    type: String,
    required: [true, 'date is required'],
  },
});

module.exports = model('Blog', BlogSchema);
