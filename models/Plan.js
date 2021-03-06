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
            },
            date: {
                type: Date,
            },
        }, 
        {timestamps: true,},
    );

    const Plan = mongoose.model("Plan", PlanSchema);

    module.exports = Plan;