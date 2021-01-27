const express = require('express')
const routes = express.Router();


routes.get('/', async(req, res) => {
    res.render('index.hbs', {
        title: 'Poriun Español'
    });
});

module.exports = routes;