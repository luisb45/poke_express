require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = 3000;
const pokemon = require('./models/pokemon.js');

//express application 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//Connect to mongoose
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.once('open', () => {
    console.log('connected to mongo');
});

//middleware
app.use(express.urlencoded({extended:false}));


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
    req.body.img = 'http://img.pokemondb.net/artwork/'
    pokemon.create(req.body, (error, createdPokemon)=>{
        res.redirect('/pokemon');
    });
    
})

//Show
app.get('/pokemon/:id', (req,res) =>{
    pokemon.findById(req.params.id, (err, foundPokemon)=> {
        res.render('Show', {pokemon: foundPokemon});
    });
});


app.listen(3000, () => {
    console.log('listening');
});
