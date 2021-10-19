/* ========== need to specify specific models for each controller========= */

const express = require("express"); 
const router = express.Router();
const { Review } = require("../models");

// base URL === /reviews

router.post("/", async function (req, res, next) {
    try {
        req.body.rating = parseInt(req.body.rating);
        await Review.create(req.body);

        return res.redirect("back");
    } catch (error) {
        console.log(error);
        req.error = error;
        next();
    }
});

module.exports = router;