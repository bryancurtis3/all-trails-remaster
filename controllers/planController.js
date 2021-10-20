
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
/// == how do i pick the text out 
router.post("/", function (req, res){
    console.log(req.session);
        res.redirect("/plans");
});

/* const addGear = function addGear(string){findByIdAndUpdate(string)};
$(() => {
$(`gear`).on(`click`, addGear(req.session.userName));
}); */

module.exports = router;











{/* <div class="container review-head">
<div>
    <!-- Get score to 1 decimal -->
    <% let score = 0 %>
    <% for( let i = 0; i < reviews.length; i++ ) { %>
         <% score += reviews[i].rating %>
    <% } %>
    <% const total = Math.round(((score / reviews.length) * 10)) / 10 %> 

    <!-- Display total rating -->
    <% let button = "Be the First to Review!" %> 
    <% if (reviews.length !== 0) { %> 
        <% button = "Write a Review" %> 
        <h2><%= total %> <i class="fas fa-star has-text-warning"></i></h2>
    <% } %> 
    
    <% if (reviews.length === 1) { %>
        <p><%= reviews.length %> review</p>
    <% } else { %>   
        <p><%= reviews.length %> reviews</p>
    <% } %> 
</div>
<%- include('../partials/_reviewModal.ejs') %>
<button class="button review-button"><%= button %> </button>
</div>

<div class="reviews-container">


<% for (let i = 0; i < reviews.length; i++) { %>
    <% const review = reviews[i] %> 

    <div>
        <figure class="image is-64x64">
            <!-- this should not have been working before i realied i needed avatar in review... deeply concerned -->
            <img class="profile-pic is-rounded" src="<%= review.avatar %>">
        </figure>


    </div>
    <div class="name-rating">
        <h3><%= review.username %></h3>
        <!-- make code for stars output -->
        <div><%= review.rating %> stars</div>
    </div>
    <p><%= review.description %></p>

    <hr>
<% } %>  */}