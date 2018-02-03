const mongoose = require('mongoose');
const Schema = mongoose.Schema;


// Create mongo schema and model

const NinjaSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  rank: {
    type: String,
  },
  available: {
    type: Boolean,
    default: false
  }
  // add in geo location
});

const Ninja = mongoose.model('ninja', NinjaSchema);

module.exports = Ninja;