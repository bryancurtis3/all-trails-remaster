
const express = require("express"); 
const router = express.Router();
const { Trail, Plan } = require("../models");

// == Baseroute /plans


router.get("/:id", async function (req, res, next) {
    try{      
        const thePlan = await Plan.findById(req.params.id).populate("trail_id user_id");

        const context = {
            plan: thePlan,
        };
        return res.render("plans/plan", context);
    } 
    catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// Plans index
router.get("/", async function (req, res, next) {
    try{      
        const allTrails = await Trail.find({});
        console.log("session", req.session.currentUser.id);
        const allPlans = await Plan.find({ user_id: req.session.currentUser.id}).populate("user_id trail_id");

        console.log("session id")
        console.log(req.session.currentUser.id)
        const context = {
            plans: allPlans,
            trails: allTrails,
        };      
        return res.render("plans/index", context);
    } 
    catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// Create plan 
router.post("/create", async function(req, res, next){
    try{
        req.body.user_id = req.session.currentUser.id;
        await Plan.create(req.body);
        return res.redirect("/plans");
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
});



// == Add Gear
router.post("/:id/gear", async function (req, res, next){
    try{
        await Plan.findByIdAndUpdate(req.params.id,
            {
                $push: 
                    { 
                        gear: req.body.gear
                    } 
            },
        );  
        return res.redirect("back");
    } 
    catch (error){
        console.log(error);
        req.error=error;
        return next();
    }
 });

 // == Remove Gear 
 // NOTE add /gear to url like the create gear
router.delete("/:id", async function (req, res, next){
    try{
         await Plan.findByIdAndUpdate
            (req.params.id, 
                { 
                    $pop: 
                    {
                        gear: 1 
                    }   
                }
            );
            return res.redirect("back");
        }
    catch(error){
        console.log(error);
        req.error=error;
        return next();
    }
});
 
// update date and trail 
router.put("/:id", async function (req, res, next){
     try{
        await Plan.findByIdAndUpdate(req.params.id,
            {
                $set: 
                    {
                        date: req.body.date,
                    
                        trail_id: req.body.trail,
                    }
            }
        );
        return res.redirect("/plans");
    }
    catch(error){
        console.log(error);
        req.error=error;
        return next();
    }
});
    
// Delete Plan 
router.delete("/:id/delete", async function (req, res, next){
    try{
        await Plan.findByIdAndDelete(req.params.id);
        return res.redirect("/plans");
    }
    catch(error){
        console.log(error);
        req.error=error;
        return next();
    }
});
 



module.exports = router;




