// create a Notebook schema:
const
  mongoose = require('mongoose'),
  notebookSchema = new mongoose.Schema({
    brand: {type: String, required: true},
    price: Number,
    best_for: [{type: String, minlength: 3}],
    size: [String]
  }, {timestamps: true})

// create a constant and make Notebook model exportable - useful in other files:
const Notebook = mongoose.model('Notebook', notebookSchema)
module.exports = Notebook