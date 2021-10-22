const mongoose = require("mongoose");

    const HikeSchema = new mongoose.Schema(
        {
          user_id: {
                type: mongoose.Types.ObjectId,
                ref: "User",
            },
          trail_id: {
            type: mongoose.Types.ObjectId,
                ref: "Trail",
                required: true,
            },
            length: { 
                type: Number,
                required: [true, "If you do not know for sure please estimates."],
            },
            time: {
                type: Number,
                required: [true, "How long did this hike take you."],
            },
        }, 
        {timestamps: true,},
    );

    const Hike = mongoose.model("Hike", HikeSchema);

    module.exports = Hike;