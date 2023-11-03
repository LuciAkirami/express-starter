const mongoose = require("mongoose");

const pokemonSchema = mongoose.Schema({
  name: {
    type: String,
    requires: true,
  },
  type: {
    type: String,
    requires: true,
  },
});

const pokemonModel = mongoose.model("pokemons", pokemonSchema);

module.exports = pokemonModel;
