var express        = require('express'),
    router         = express.Router(),
    bodyParser     = require('body-parser'),
    methodOverride = require('method-override'),
    app            = express(),
    request        = require('request');

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(require("express-session")({
    secret: 'I am cool',
    resave: false,
    saveUninitialized: false
}));

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    next();
});

// CREATE ROUTES
var indexRoutes = require('./routes/index');

//REQUIRING ROUTE FILES USING EXPRESS ROUTER
app.use('/', indexRoutes);

//TELL APP TO LISTEN TO PORT AND IP
app.listen(process.env.PORT || 3002, process.env.IP, function(){
    console.log("================================");
    console.log("The Absideon server has started on port 3002!");
    console.log("================================");
});