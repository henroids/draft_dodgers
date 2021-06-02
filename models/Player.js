const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  Pos: {
    type: String,
    required: true
  },
  Style: {
    type: String,
    required: true
  },
  Player_Line: {
    type: String,
    required: true
  },
  Rating: {
    type: String,
    required: true
  },
  School: {
    type: String,
    required: true
  },
  Team: {
    type: String,
    required: false
  }
});
 
module.exports = Player = mongoose.model('player', PlayerSchema);