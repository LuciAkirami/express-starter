const express = require("express");
const dotenv = require("dotenv").config();
const connectDB = require("./config/config.js");
const {
  createPokemon,
  getPokemon,
  getPokemonbyId,
  updatePokemonbyId,
  deletePokemonbyId,
} = require("./controller/controller.js");
const app = express();

const port = process.env.PORT || 5000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", getPokemon);
app.post("/create", createPokemon);
app.get("/pokemon/:id", getPokemonbyId);
app.put("/update/:id", updatePokemonbyId);
app.delete("/pokemon/:id", deletePokemonbyId);

app.listen(port, () => {
  console.log(`Listening to PORT ${port}`);
});
