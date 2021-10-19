/* ========== need to specify specific models for each controller========= */

const express = require("express"); 
const router = express.Router();
const {User, Trail, Review } = require("../models");

// base URL === /:id

router.post("/", function (req, res, next) {
    // req.body.trail = req.params.id;
    console.log(req.body);
    Review.create(req.body, function (error, newReview) {
        try {
            res.redirect("/trails/" + req.body.trail);
        } catch (error) {
            console.log(error);
            req.error = error;
            next();
        }
    })
});

module.exports = router;