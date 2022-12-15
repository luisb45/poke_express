require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const pokemon = require('./models/pokemon.js');
const methodOverride = require('method-override');

//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.use(express.urlencoded({extended:false}));

app.use(methodOverride('_method'));


//Connect to mongoose
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

//Seed Route
app.get('/pokemon/seed', (req, res) =>{
    const seededPokemon = [
    {name: "bulbasaur", img: "http://img.pokemondb.net/artwork/", readyToEvolve: true},
    {name: "ivysaur", img: "http://img.pokemondb.net/artwork/", readyToEvolve: false},
    {name: "venusaur", img: "http://img.pokemondb.net/artwork/", readyToEvolve: false},
    {name: "charmander", img: "http://img.pokemondb.net/artwork/", readyToEvolve: true},
    {name: "charizard", img: "http://img.pokemondb.net/artwork/", readyToEvolve: false},
    {name: "squirtle", img: "http://img.pokemondb.net/artwork/", readyToEvolve: false},
    {name: "wartortle", img: "http://img.pokemondb.net/artwork/", readyToEvolve: true}
    ];
    pokemon.deleteMany({}).then((data) => {
        pokemon.create(seededPokemon).then((data) =>{
            res.redirect('/pokemon');
        });
    });
});

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!');
})

//Index
app.get('/pokemon', (req,res) =>{
    pokemon.find({}, (error, allPokemon)=>{
        res.render('Index', {
            pokemon: allPokemon
        });
    }); 
});

//New
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//Create post route
app.post('/pokemon', (req, res) => {
    req.body.img = `http://img.pokemondb.net/artwork/` 
    req.body.readyToEvolve = req.body.readyToEvolve === "on" ? true : false;
    pokemon.create(req.body, (error, createdPokemon)=>{
        res.redirect('/pokemon');
    });
});

//Update
app.put('/pokemon/:id', (req, res) =>{
    req.body.readyToEvolve = req.body.readyToEvolve === "on" ? true : false;
    pokemon.findByIdAndUpdate(req.params.id, req.body, (err, updatedPokemon) =>{
        res.redirect(`/pokemon/${req.params.id}`);
    });
});

//Show
app.get('/pokemon/:id', (req,res) =>{
    pokemon.findById(req.params.id, (err, foundPokemon)=> {
        res.render('Show', {pokemon: foundPokemon});
    });
});

//Delete
app.delete('/pokemon/:id', (req, res) =>{
    pokemon.findByIdAndRemove(req.params.id, (err, data) =>{
        res.redirect('/pokemon')
    })
});

//Edit
app.get('/pokemon/:id/edit', (req, res) =>{
    pokemon.findById(req.params.id, (err, foundPokemon) =>{
        res.render('Edit', {pokemon: foundPokemon})
    });
});


app.listen(3000, () => {
    console.log('listening');
});
