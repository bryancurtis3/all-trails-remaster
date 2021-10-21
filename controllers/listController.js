
const express = require("express"); 
const router = express.Router();
const { User, Trail, List } = require("../models");
const { findByIdAndUpdate } = require("../models/Hike");

// base url === "/" 

//== User List index
router.get("/lists", async function(req, res, next){
    try{
        const userList = await List.find( {user_id: req.session.currentUser.id} ).populate( { path: "trail_id"} ).populate("user");

        const authUser = await User.findById(req.session.currentUser.id);
        const context = {
            lists: userList,
            user: authUser,
        };
        
        return res.render ("lists/index", context);
    }
    catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
});

//== User List Show Page
router.get("/lists/:id", async function (req, res, next) {
 try { 
    const selectedList = await List.findById(req.params.id).populate("trail_id user_id");
    
    context = {
        list: selectedList,
        trail: allTrails,
    }
   return res.render("lists/show", context);
 }
 catch(error){ 
     console.log(error);
     req.error = error;
     return next();
 }
});


// Trail Show
router.get("/list/:id", async function (req, res, next) {
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


// Create List
router.post("/lists", async function (req, res, next) {
    try {
        req.body.user = req.session.currentUser.id;
        await List.create(req.body);

        return res.redirect("/lists")
    } catch (error) {
        console.log(error);
        req.error = error;
        next();
    }
});

// Add Trail to list

router.put("/lists/:id", async function (req, res, next){
    try{
        await List.findByIdAndUpdate(req.params.id, {
                $push:
                {
                    trail_id: req.body.trail_id
                }
            });
        return res.redirect("back");   
        console.log("did we hit the route??",req.body.trail_id);
    }
    catch(error){console.log(error);}
});

// Delete route for trail
router.delete("/:id/remove", async function (req, res, next){
    try{
        console.log("hopefully a trail id:", req.body.trail);
        await List.findByIdAndUpdate(req.params.id, {
            $pull:
            { 
                trail_id: req.body.trail 
               }
           });
           return res.redirect("back");
       }
       catch(error){
           console.log(error);
           return next()};
       });

// Delete route for list
 router.delete("/lists/:id/delete", async function (req, res, next){
     try{
         console.log("we hitting it", req.params.id)
         await List.findByIdAndDelete(req.params.id);
         return res.redirect("/lists");
     }
     catch(error){
         console.log(error);
         return next();
     }
 });

 
 

module.exports = router;