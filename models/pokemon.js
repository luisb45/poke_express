const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: true},
});

const pokemon = mongoose.model('pokemon', pokemonSchema);

module.exports = pokemon;


// const pokemon = [
//     {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/"},
//     {name: "ivysaur", img: "http://img.pokemondb.net/artwork/"},
//     {name: "venusaur", img: "http://img.pokemondb.net/artwork/"},
//     {name: "charmander", img: "http://img.pokemondb.net/artwork/"},
//     {name: "charizard", img: "http://img.pokemondb.net/artwork/"},
//     {name: "squirtle", img: "http://img.pokemondb.net/artwork/"},
//     {name: "wartortle", img: "http://img.pokemondb.net/artwork/"}
//  ];


// module.exports = pokemon;

