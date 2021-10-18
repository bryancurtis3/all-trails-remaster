require("../config/db.configuration");

const { User } = require("../models");

const users = [
    {
        username: "Admin",
        email: "tester@test.com",
        password: "$2b$10$q/AcPIWmEB7bpRe/uJx9p.1zd9skrzcBayN/GO0yvHIJ6ph5eoUmi",
        avatar: "https://img.favpng.com/0/23/18/stormtrooper-clone-trooper-boba-fett-computer-icons-scalable-vector-graphics-png-favpng-56B4q1isPqtT7wgwpRPZ1ArJ8.jpg",
        location: "the, PW, test",
    }
];

const seedUsers = async function seedUsers (){
    try{
        await User.deleteMany({});
        const createdUsers = await User.insertMany(users);
        console.log("=== Users Seeded ===");
        console.log(createdUsers);
        process.exit();
    }
    catch (error) {
        console.log(error);
    }
}

seedUsers();