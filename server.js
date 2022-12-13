const express = require('express');
const app = express();
const port = 3000;
const pokemon = require('./models/pokemon.js');

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

app.listen(3000, () => {
    console.log('listening');
});

app.get('/', (req,res) => {
    res.send('Welcome to the Pokemon App!');
})

app.get('/pokemon', (req,res) =>{
    res.render('Index', {pokemon});
})