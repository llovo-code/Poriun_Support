const express = require('express');
const app = express();
const path = require('path');
const expresshbs = require('express-handlebars');

//setting 



///hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.set('port', process.env.PORT || 3000);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expresshbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpers: require('./lib/helpers')
}));


//routers
app.use(require('./routes/index.js'));
app.use(require('./routes/authentication.js'));


//static files
app.use(express.static(path.join(__dirname, 'public')));


//listening port
app.listen(app.get('port'), () => {
    console.log(`App listening on port ${app.get('port')}!`);
});