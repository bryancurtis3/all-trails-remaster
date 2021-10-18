/* ========== need to specify specific models for each controller========= */

const express = require("express"); 
const router = express.Router();
const {User, Trail, Review } = require("../models");

// base URL === /:id

router.post("/reviews", function (req, res, next) {
    req.body.trail = req.params.id; 
    console.log(req.body.trial);
    Review.create(req.body, function (error, newReview) {
        try {
            res.redirect("/:id")
        } catch (error) {
            console.log(error);
            req.error = error;
            next();
        }
    })
});

module.exports = router;