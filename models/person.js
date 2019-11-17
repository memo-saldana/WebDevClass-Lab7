var mongoose = require('mongoose');


var personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name cannot be empty'],
    unique: true
  },
  age: {
    type: Number
  },
  born: {
    type: String
  },
  timeline: {
    type: String
  },
  alliegance: {
    type: [String]
  },
  playedBy: {
    type: String
  },
  titles: {
    type: [String]
  },
  father: {
    type: String
  },
  mother: {
    type: String
  },
  spouse: {
    type: String
  }
})

module.exports = mongoose.model("Person", personSchema);


