
const express = require("express"); 
const router = express.Router();
const { User, Trail, Plan } = require("../models");

// == Baseroute /plans

router.get("/", async function (req, res, next) {
    try{      
        const allTrails = await Trail.find({});

       /* for testing purposes will need to be updated to find by id */
        const thePlan = await Plan.findOne({});

        const context = {
            plan: thePlan,
            trails: allTrails,
        };
    return res.render("plans/plan", context);
    } 
    catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// Create plan 
 router.post("/", async function(req, res, next){

 })



// == Add Gear

router.post("/:id/gear", async function (req, res, next){
   try{
   const addGear = await Plan.findByIdAndUpdate(req.params.id,
        {
            $push: 
                { 
                    gear: req.body.gear
                } 
         },
    );  
     return res.redirect("/plans");
    } 
    catch (error){
        console.log(error);
    }
 });

 // == Remove Gear 

router.put("/:id", async function (req, res, next){
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
            return res.redirect("/plans");
        }
    catch(error){
        console.log(error);
    }
});
 
// update date and trail 

router.post("/:id", async function (req, res, next){
     try{
         console.log("date", req.body.date);
         console.log("trail id", req.body.trail);
         console.log("user id: ", req.session.currentUser.id);
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
    catch(error){console.log(error);}
        });
    

   

 
 



module.exports = router;