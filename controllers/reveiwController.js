/* ========== need to specify specific models for each controller========= */

const express = require("express"); 
const router = express.Router();
const {User, Review } = require("../models");

// base URL === /reviews

router.post("/", async function (req, res, next) {
    try {
        req.body.rating = parseInt(req.body.rating);
        const newReview = await Review.create(req.body);
        console.log(req.body);

        return res.redirect("/")
    } catch (error) {
        console.log(error);
        req.error = error;
        next();
    }
});

module.exports = router;