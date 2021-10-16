const mongoose = require("mongoose");

    const UserSchema = new mongoose.Schema(
        {
          Name: {
                type: String,
                required: [true, "Please input your name."],
            },
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
                required: [true, "Please provide a valid password."],
            },
            avatar: {
                type: String,
                required: [true, "Add your favoite profile image."],
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