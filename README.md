# Simple node.js template test with handlebars

Start new npm project
`npm init`

Insert express and express-handlebars dependencies for your npm project
`npm install express express-handlebars --save`

Import the dependencies in your JS (*server.js*)
```javascript
var app = require('express')()
  , exphbs = require('express-handlebars')
```

Configure the views files. HandleBars have a main view to centralize your html
```javascript
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
```

Now, Create a route in node.js and call the handlebars
```javascript
app.get("/", function (req, res, next) {
    res.render('index', {
        title: 'Simple Node.js With Mustache example',
        name: 'Gustavo Apolinario'
    });
});
```

This code will use the files:
⋅⋅* ./views/layouts/main.hbs
⋅⋅* ./views/index.hbs

In your .hbs file, create tags for be replaced by handlebars. Like example, i use:
```html
<h1>{{ title }}</h1>
```
