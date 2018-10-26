const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

conts port = process.env.PORT || 3000;

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'sUMITO',
    });
})
app.get('/about', (req, res) => {
    res.render('about', {});
})

app.listen(port, () => {
    console.log(`Escuchando Peticiones en el Puerto ${ port }`);
});