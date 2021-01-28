const { Router } = require('express');
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

routes.get('/download', (req, res) => {
    res.render('links/download');
});

routes.get('/about', (req, res) => {
    res.render('links/about');
});

routes.get('/contact', (req, res) => {
    res.render('links/contact');
});



module.exports = routes;