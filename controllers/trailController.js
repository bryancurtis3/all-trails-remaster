/* ========== need to specify specific models for each controller========= */

const express = require("express"); 
const router = express.Router();
const { Trail, User, Review } = require("../models");

//== base route /trails 

// Trails Index
router.get("/", async function (req, res, next) {
    try {
        let query = {};

        if (req.query.q) {
            query = {
                $or: [
                    {
                        name: {
                            $regex: req.query.q,
                            $options: "i",
                        },
                    },
                    {
                        description: {
                            $regex: req.query.q,
                            $options: "i",
                        },
                    }
                ]
            }
        }

        // *****************************************************
        
        // Figure out how to pass active user (session?) info as context? Or how to grab it in the ejs or something. Have to assign the review a user id

        // *****************************************************

        const allTrails = await Trail.find(query);
        console.log(allTrails.length)
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
        // console.log(req.session.currentUser.id + "test")
        const reviews = await Review.find( {trail_id: req.params.id} ).populate("user").sort("-createdAt");
        
        
        const context = { 
            trail: trail,
            reviews: reviews,
        };

        // Condition so non users can use the website
        if (req.session.currentUser !== undefined) {
            const user = await User.findById(req.session.currentUser.id);
            context.user = user;
        }
        
        return res.render("trails/show", context);
    } catch (error) {
        console.log(error);
        req.error = error;
        next();
    }
});

module.exports = router;