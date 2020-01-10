let handlebars = require('express3-handlebars');
let express = require('express');

module.exports = function(app) {

    app.engine('js', handlebars({
        defaultLayout: 'Vote',
        extname: ".js",
        layoutsDir: '../client/src/'
    }));

    /* .js est l'extension par default */
    app.set('view engine', 'js');
    /* montrer à express où sont les templates */
    app.set('views', '../client/src/');

    app.use(express.urlencoded());
};