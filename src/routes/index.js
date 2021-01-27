const express = require('express')
const routes = express.Router();


routes.get('/', async(req, res) => {
    res.render('index.hbs', {
        title: 'Poriun Español'
    });
});


routes.get('/login', (req, res) => {
    res.render('links/login');
});

module.exports = routes;