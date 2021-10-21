require("../config/db.configuration");

const {  Review } = require("../models")


const wipeReviews = async function wipeReviews () {
    try {
        await Review.deleteMany({});
        console.log("=== Reviews Wiped ===");
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

wipeReviews();