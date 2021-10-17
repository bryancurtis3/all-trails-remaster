const mongoose = require("mongoose");

    const ListSchema = new mongoose.Schema(
        {
            name: {
                type: String,
                required: [true, "What should this list be called?"], 
            },
            user_id: {
                type: mongoose.Types.ObjectId,
                ref: "User",
                required: true, 
            },
            trail_id: {
                type: Array,
                ref: "Trail",
                required: [true, "Add at least one trail."]
            },
        }, 
        {timestamps: true,},
    );

    const List = mongoose.model("List", ListSchema);

    module.exports = List;