'use strict';
var app = require('express')()
  , exphbs = require('express-handlebars')
  , path = require("path");

/* rendering engine, with change extension to .hbs */
app.engine('.hbs', exphbs({
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    defaultLayout: 'main',
    helpers: {
        foo: function () {
            return "foo";
        }
    }
}));

/* set view engine */
app.set('view engine', 'hbs');
/* views directory to search */
app.set('views', 'views');


/* home path */
app.get("/", function (req, res, next) {
    res.render('index', {
        title: 'Simple Node.js With Mustache example',
        name: 'Gustavo Apolinario'
    });
});

app.listen(3000, function () {
    console.log("Express server listening on port 3000");
});
