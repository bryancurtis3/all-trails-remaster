const mongoose = require("mongoose");

    const UserSchema = new mongoose.Schema(
        {
            username: {
                type: String,
                required: true,
            },
            email: { 
                type: String,
                required: [true, "Please input a valid Email Address."],
                unique: true,
            },
            password: {
                type: String,
                required: [true, "Password must be at least 7 characters."],
                min: 7,
            },
            avatar: {
                type: String,
                required: [true, "Add your favoite profile image."],
                default: "https://i.imgur.com/j86hDNC.jpg"
            },
            location: {
                type: String,
                // possibly a dropped pin or coordinates
            },
        }, 
        {timestamps: true,},
    );

    const User = mongoose.model("User", UserSchema);

    module.exports = User;