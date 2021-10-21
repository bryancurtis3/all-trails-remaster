
/* ====!!!! Must be run After the seedTrails.js !!!!==== */

/*  == and updated manually == */


require("../config/db.configuration");
const { List, User } = require("../models");

/* find user by user name
generate trail ids radomly usind math.random() to to hit the trial ids like in an array maybe */

const lists = [
    {
        name: "Admin Favorites",
        user_id: "616de0428522779fb4e92a53",
        bryan
        trail_id: ["616df3d061265f478db458b8","616df3d061265f478db458b4", "616df3d061265f478db458b6"],
        avatar: "https://img.favpng.com/0/23/18/stormtrooper-clone-trooper-boba-fett-computer-icons-scalable-vector-graphics-png-favpng-56B4q1isPqtT7wgwpRPZ1ArJ8.jpg",
        username: "Admin",
    },
    {
        name: "Admin Second List",
        user_id: "616de0428522779fb4e92a53",
        bryan
        trail_id: ["616df3d061265f478db458b9","616df3d061265f478db458b8", "616df3d061265f478db458b6"],
        avatar: "https://img.favpng.com/0/23/18/stormtrooper-clone-trooper-boba-fett-computer-icons-scalable-vector-graphics-png-favpng-56B4q1isPqtT7wgwpRPZ1ArJ8.jpg",
        username: "Admin",

    },
    {
        name: "Admin Third List",
        user_id: "616de0428522779fb4e92a53",
        bryan
        trail_id: ["616df3d061265f478db458b4","616df3d061265f478db458b8", "616df3d061265f478db458b6","616df3d061265f478db458b9"],
        avatar: "https://img.favpng.com/0/23/18/stormtrooper-clone-trooper-boba-fett-computer-icons-scalable-vector-graphics-png-favpng-56B4q1isPqtT7wgwpRPZ1ArJ8.jpg",
        username: "Admin",

    },
];

const seedLists = async function seedLists (){
    try{
        await List.deleteMany({});
        const createdLists = await List.insertMany(lists);
        console.log("=== Lists Seeded ===");
        console.log(createdLists);
        process.exit();
    }
    catch (error) {
        console.log(error);
    }
}
seedLists();