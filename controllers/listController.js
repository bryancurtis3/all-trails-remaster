
const express = require("express"); 
const router = express.Router();
const { User, Trail, List } = require("../models");

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
    const selectedList = await List.findById(req.params.id).populate("trail_id");
    
    console.log(`==========selected list  ${selectedList}`);
    context = {
        list: selectedList,
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

/* 
// delete route
router.post("/lists/:id", async function (req, res, next) {
  try{ 
      await List.findByIdAndUpdate(req.params.id, {trail_id: {$set: ""}});

    } 
  catch(error){
      console.log(error);
  }
});

// Add Trail to List 
router.post("/lists/:id", async function (req, res, next) { 
    try{
        List.FindByIdAndUpdate(

        )
    }

    catch(error){
        console.log(error);
    }
} 
  */
module.exports = router;