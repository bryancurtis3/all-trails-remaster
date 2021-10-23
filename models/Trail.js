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
            },
            length: {
                type: Number,
                required: [true, "Distance in Miles"],
            },
            elevation: {
                type: Number,
                required: [true, "What is the total elevation gain in feet?"],
                min: 0,
            },
            style: {
                type: String,
                default: "Out $ Back",
            },
            difficulty: {
                type: String,
                min: 0,
                max: 5,
                required: [true, "Rate on scale of 1 - 5"],
            },
            image: {
                type: String,
                required: [true, "Please provide a representitive image"]
            },
            start: String,
            end: [String],

           /* 
            location: {
                address: String,
                lat: Number,
                lng: Number
            }
           */
        } ,  
        {timestamps: true,},
    );

    const Trail = mongoose.model("Trail", TrailSchema);

    module.exports = Trail;