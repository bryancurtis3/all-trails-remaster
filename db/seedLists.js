
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
        trail_id: ["616df3d061265f478db458b8","616df3d061265f478db458b4", "616df3d061265f478db458b6"],
    },
    {
        name: "Admin Second List",
        user_id: "616de0428522779fb4e92a53",
        trail_id: ["616df3d061265f478db458b9","616df3d061265f478db458b8", "616df3d061265f478db458b6"],
    },
    {
        name: "Admin Third List",
        user_id: "616de0428522779fb4e92a53",
        trail_id: ["616df3d061265f478db458b4","616df3d061265f478db458b8", "616df3d061265f478db458b6","616df3d061265f478db458b9"],
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