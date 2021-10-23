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
        { mongoUrl: process.env.MONGODB_URI }),
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    cookie: { maxAge: 100 * 60 * 60 * 24 * 365},
}));

/* === Middleware === */

// access user 
app.use(function (req, res, next){
    res.locals.user = req.session.currentUser;
    next();
});

// == Logger
app.use(function (req, res, next){
    console.log(`${req.method} - ${req.url}`);
    next();
});

/* === Routes === */

// Home route
const { Trail, Review } = require("./models"); // idk where to put this atm -> it ok
app.get("/", async function (req, res, next) {
    try {
        // const allTrails = await Trail.find({});
        const allReviews = await Review.find({});

        const context = { 
            // trails: allTrails,
            trails: await Trail.find({}),
            reviews: allReviews, // NOTE Not needed
        };
    
        return res.render("index", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        next();
    }
});

// ==  Default Routes

// user
app.use("/", controllers.user);
// list
// NOTE should be /lists
app.use("/", controllers.list);
// trail
app.use("/trails", controllers.trail);
// reviews
app.use("/reviews", controllers.review);
// plans
app.use("/plans", controllers.plan);


// == Utility Routes

// == 404
app.get("/*", function(req, res){
    const context = {
        error: req.error
    };
    res.render("404", context);
});

/* === Server Listener === */

app.listen(PORT, function () {
    console.log(`Listening for client reqs on port ${PORT}!!`);
});