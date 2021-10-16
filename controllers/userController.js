/* ========== need to specify specific models for each controller========= */

const express = require("express"); 
const router = express.Router();
const { User } = require("../models");




// Profile show
router.get("/:username", function (req, res, next) {
    try {
        const user = User.find({ username: req.params.username });
        // stopped here, continue later when I cant test with views
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


module.exports = router;