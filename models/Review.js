const mongoose = require("mongoose");

    const ReviewSchema = new mongoose.Schema(
        {
            user_id: {
                type: mongoose.Types.ObjectId,
                ref: "User",
                required: true, 
            },
            trail_id: {
                type: mongoose.Types.ObjectId,
                ref: "Trail",
                required: [true, "Add at least one trail."]
            },
            decription: {
                type: String,
                required: [ true, "What made this hike standout?"],
            rating: {
                type: Number,
                min: 0,
                max: 5,
                required: [true, "How much did you enjoy this hike on a scale of 1 - 5?"],
            },
            }
        }, 
        {timestamps: true,},
    );

    const Review = mongose.model("Review", ReviewSchema);

    module.exports = Review;