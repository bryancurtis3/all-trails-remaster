const mongoose = require("mongoose");

    const ReviewSchema = new mongoose.Schema(
        {
            user_id: {
                type: mongoose.Types.ObjectId,
                ref: "User",
                // required: true, 
            },
            trail_id: {
                type: mongoose.Types.ObjectId,
                ref: "Trail",
            },
            description: String,
            rating: {
                type: Number,
                min: 1,
                max: 5,
                required: [true, "How much did you enjoy this hike on a scale of 1 - 5?"],
            },
            avatar: String,
            username: String,
        }, 
        {timestamps: true,},
    );

    const Review = mongoose.model("Review", ReviewSchema);

    module.exports = Review;