/* ========== need to specify specific models for each controller========= */

const express = require("express"); 
const router = express.Router();
const { User } = require("../models");

// base url === / 


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




module.exports = router;