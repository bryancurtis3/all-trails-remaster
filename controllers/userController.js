
const express = require("express"); 
const router = express.Router();
const { User, List, Trail } = require("../models");
const bcrypt = require("bcrypt");
const saltRounds = 10;

// base url === "/" 




// == Registration 
router.get("/registration", function (req, res, next) {
    return res.render("users/registration");
});

// Create User
router.post("/registration", async function (req, res, next){
    try{
        const hasAccount = await User.exists({
            email: req.body.email 
        });
            if(hasAccount) {
                return res.redirect("/login");
            }

        const hash = await bcrypt.hash(req.body.password, saltRounds);
        req.body.password = hash;

        await User.create(req.body);

        return res.redirect("/login");
    }
    
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
});

router.get("/login", function(req, res, next){
    return res.render("users/login");
});




// == Login 

// Show login page
router.get("/login", function(req, res, next){
    res.render("users/login");
});

// Create(?) login
router.post("/login", async function (req, res, next){
    try{
        const foundUser = await User.findOne({
            email: req.body.email });

        if(!foundUser) {
            return res.redirect("/registration");
        }

        const varified = await bcrypt.compare(req.body.password, foundUser.password);

        if(!varified) { 
            return res.send("Email or Password Invalid");
            ///// would like to make this a pop-up message /////
        }
        
        req.session.currentUser = {
            id: foundUser._id,
            username: foundUser.username,
        };
        return res.redirect("/");
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
});


// == Profile / Update page. 

// Show profile page
router.get("/profile", async function(req, res, next){
    try{
        
        const authUser = await User.findById(req.session.currentUser.id); 
        const allTrails = await Trail.find({});
        const context = { 
            user: authUser,
            trails: allTrails,
         };
        
        return res.render("users/show", context);
    
    }
    catch(error){
        console.log(error);
        req.error = error;
        return res.redirect("/login");
    }
});

// Show update profile page
router.get("/profile/update", async function(req, res, next){
    try{
        const authUser = await User.findById(req.session.currentUser.id); 
        const context = { 
            user: authUser,
        };
        
        return res.render("users/update", context);
    
    }
    catch(error){
        console.log(error);
        req.error = error;
        return res.redirect("/login");
    }
});

// Update profile page
router.put("/profile", async function(req, res, next){
    try{
        const updatedUser = 
        await User.findByIdAndUpdate(
            req.session.currentUser.id,
            {$set: req.body});
        console.log(req.session.currentUser.id);
        return res.redirect("/profile");
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
});


// == Logout

// Show logout page
router.get("/logout", async function (req, res, next){
    try{
        req.session.destroy();
        return res.redirect("/login");
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
});


module.exports = router;