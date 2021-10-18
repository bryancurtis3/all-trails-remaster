/* ========== need to specify specific models for each controller========= */

const express = require("express"); 
const router = express.Router();
const { Trail } = require("../models");

//== base route /trails 

// Trails Index
router.get("/", async function (req, res, next) {
    try {
        const allTrails = await Trail.find({});
        const context = { trails: allTrails };

        return res.render("trails/index", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        next();
    }
});

// Trail Show
router.get("/:id", async function (req, res, next) {
    try {
        const trail = await Trail.findById(req.params.id);
        const context = { trail: trail };
        
        return res.render("trails/show", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        next();
    }
});

module.exports = router;