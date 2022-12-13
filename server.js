const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');

//express application 
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//middleware
app.use(express.urlencoded({extended:false}));


app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!');
})

//Index
app.get('/pokemon', (req,res) =>{
    res.render('Index', {pokemon});
})

//New
app.get('/pokemon/new', (req, res) => {
    res.render('New');
});

//Create post route
app.post('/pokemon', (req, res) => {
    req.body.img = 'http://img.pokemondb.net/artwork/'
    pokemon.push(req.body);
    res.redirect('/pokemon');
})

//Show
app.get('/pokemon/:id', (req,res) =>{
     res.render('Show', {pokemon: pokemon[req.params.id]});
})


app.listen(3000, () => {
    console.log('listening');
});
