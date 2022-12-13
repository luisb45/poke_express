const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');

//middleware
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


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

//Show
app.get('/pokemon/:id', (req,res) =>{
     res.render('Show', {pokemon: pokemon[req.params.id]});
})


app.listen(3000, () => {
    console.log('listening');
});
