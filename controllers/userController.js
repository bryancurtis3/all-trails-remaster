/* ========== need to specify specific models for each controller========= */

const express = require("express"); 
const router = express.Router();
const { User } = require("../models");
<<<<<<< HEAD




// Profile show
router.get("/:username", function (req, res, next) {
    try {
        const user = User.find({ username: req.params.username });
        // stopped here, continue later when I cant test with views
    } catch (error) {
=======
const bcrypt = require("bcrypt");
const saltRounds = 10; 

// base url === "/"" 




// == Registration 
router.get("/registration", function (req, res, next) {
    return res.render("users/registration");
});

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
>>>>>>> dev
        console.log(error);
        req.error = error;
        return next();
    }
});

<<<<<<< HEAD
=======
router.get("/login", function(req, res, next){
    return res.render("users/login");
});




// == Login 
router.get("/login", function(req, res, next){
    res.render("users/login")
})

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
            lastname: foundUser.last,
        };
        return res.redirect("/");
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
});


>>>>>>> dev

module.exports = router;