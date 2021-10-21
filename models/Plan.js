const mongoose = require("mongoose");

    const PlanSchema = new mongoose.Schema(
        {
            user_id: {
                type: mongoose.Types.ObjectId,
                ref: "User",
                required: true, 
            },
            trail_id: {
                type: mongoose.Types.ObjectId,
                ref: "Trail",
                required: [false, "Add at least one trail."]
            },
            gear: {
                type: Array,
                required: [ false, "List the gear would will be bringing on this trip."
                ],
            date: {
                type: String,
                // required: [false, "When are you planning on going on this trip?"],
            },
            }
        }, 
        {timestamps: true,},
    );

    const Plan = mongoose.model("Plan", PlanSchema);

    module.exports = Plan;