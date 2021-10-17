const mongoose = require("mongoose");

    const TrailSchema = new mongoose.Schema(
        {
            name: { 
                type: String,
                required: true, 
            },
            description: {
                type: String,
                required: [true, "Describe this trail."]
            },
            location: {
                type: String,
                required: [ true, "List the gear would will be bringing on this trip."],
                // add feature for map-box (or coordinates)
            },
            length: {
                type: Number,
                required: [true, "Distance in Miles"],
            },
            elevation: {
                type: Number,
                required: [true, "What is the net elevation gain in feet?"],
                min: 0,
            },
            difficulty: {
                type: Number,
                min: 0,
                max: 5,
                required: [true, "Rate on scale of 1 - 5 "],
            },
        }, 
        {timestamps: true,},
    );

    const Trail = mongoose.model("Trail", TrailSchema);

    module.exports = Trail;