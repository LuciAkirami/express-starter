const pokemonModel = require("../model/models.js");

const createPokemon = async (req, res) => {
  const pokemon = await pokemonModel.create(req.body);
  res.send(pokemon);
};

const getPokemon = async (req, res) => {
  const pokemon = await pokemonModel.find();
  res.send(pokemon);
};

const getPokemonbyId = async (req, res) => {
  const { id } = req.params;
  const pokemon = await pokemonModel.findById(id);
  res.send(pokemon);
};

const updatePokemonbyId = async (req, res) => {
  const { id } = req.params;
  const pokemon = await pokemonModel.findByIdAndUpdate(id, req.body);
  res.send(pokemon);
};

const deletePokemonbyId = async (req, res) => {
  const { id } = req.params;
  const pokemon = await pokemonModel.findByIdAndDelete(id, req.body);
  res.send(pokemon);
};

module.exports = {
  createPokemon,
  getPokemon,
  getPokemonbyId,
  updatePokemonbyId,
  deletePokemonbyId,
};
