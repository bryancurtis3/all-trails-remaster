
const express = require("express"); 
const router = express.Router();
const { User, Trail, List } = require("../models");

// base url === "/" 

//== User List index
/* router.get("/lists", function (req, res){
    return res.render("lists/index");
});  */

router.get("/lists", async function(req, res, next){
    try{
        const userList = await List.find( {user_id: req.session.currentUser.id} ).sort("-createdAt");
            for (i = 0; i < userList.length; i++ ) {
                const firstTrail = await Trail.findById( `${userList[i].trail_id[0]}`);
                await console.log(firstTrail);
                userList[i].image = await firstTrail.image; 
                await console.log(firstTrail.image);
        };
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

module.exports = router;