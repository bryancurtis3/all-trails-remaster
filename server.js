/*  === External Modules === */
const express = require("express");
const methodOverride = require("method-override");

// == Session modules 
const session = require("express-session");
const MongoStore = require("connect-mongo");


/* === Internal Modules === */

const controllers = require("./controllers");

// == db connection 
require("./config/db.configuration");

/* === System Variables === */

const app = express();
const PORT = process.env.PORT;

/* === System Configuration === */
app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false}));

app.use(methodOverride("_method"));

app.use(session({
    store: MongoStore.create(
        { mongoUrl: process.env.MONGODB_URI_DEV}),
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized:false,
    cookie: { maxAge: 100 * 60 * 60 * 24 * 365},
}));

/* === Middleware === */

// == Logger
app.use(function (req, res, next){
    console.log(`${req.method} - ${req.url}`);
    next();
});

/* === Routes === */

// Home route
app.get("/", function (req, res) {
    res.render("./index");
});

app.use("/", controllers.user);

// ==  Default Routes

// == Utility Routes

/* === Server Listener === */

app.listen(PORT, function (){
    console.log(`Listening for client reqs on port ${PORT}!!`);
});