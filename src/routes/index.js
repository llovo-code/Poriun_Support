const { Router } = require('express');
const express = require('express')
const routes = express.Router();


routes.get('/', (req, res) => {
    res.render('home/index.hbs', );
});

routes.get('/index', (req, res) => {
    res.render('home/index.hbs');
});

routes.get('/download', (req, res) => {
    res.render('home/download');
});

routes.get('/download-file', (req, res) => {

    res.download('https://github.com/poriun/PoriunCoin/releases/download/v1.0/Poriun-win64-setup.zip');
});

routes.get('/about', (req, res) => {
    res.render('home/about');
});

routes.get('/contact', (req, res) => {
    res.render('home/contact');
});


routes.get('/staff', (req, res) => {
    res.render('home/staff');
})

routes.get('/privacity-policity', (req, res) => {
    res.render('home/privacy-policy');
})


routes.get('/terms-and-condition', (req, res) => {
    res.render('home/terms-and-condition');
})

routes.get('/disclaimer', (req, res) => {
    res.render('home/disclaimer');
})

routes.get('/FAQ', (req, res) => {
    res.render('home/FAQ');
});


module.exports = routes;