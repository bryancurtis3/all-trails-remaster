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
            trail_id: [{
                type: mongoose.Types.ObjectId,
                ref: "Trail",
            }],
            user: {
                type: mongoose.Types.ObjectId,
                ref: "User",
                required: true,
            },
            avatar: String,
            username: String,
        }, 
        {timestamps: true,},
    );

    const List = mongoose.model("List", ListSchema);

    module.exports = List;