const mongoose = require('mongoose');

const { Schema } = mongoose;

const todoSchema = new Schema({
  todoDate: {
    type: Date,
    default: Date.now
  },
  todo: [
    {
      type: Schema.Types.ObjectId,
      ref: 'ToDo'
    }
  ]
});

const ToDo = mongoose.model('ToDo', todoSchema);

module.exports = ToDo;
