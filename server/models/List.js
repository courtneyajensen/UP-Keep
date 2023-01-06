const mongoose = require('mongoose');

const { Schema } = mongoose;

const listSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  }
});

const List = mongoose.model('List', listSchema);

module.exports = List;
