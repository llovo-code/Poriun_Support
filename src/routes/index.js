const express = require('express')
const routes = express.Router();


routes.get('/', async(req, res) => {
    res.render('home/index.hbs', {
        title: 'Poriun Español'
    });
});

routes.get('/download', (req, res) => {
    res.render('home/download');
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


module.exports = routes;