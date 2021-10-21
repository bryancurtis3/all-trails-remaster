
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
        trail_id: ["616f5c7a20506067964e1a4d","616f5c7a20506067964e1a50", "616f5c7a20506067964e1a51"],
    },
    {
        name: "Admin Second List",
        user_id: "616de0428522779fb4e92a53",
        trail_id: ["616f5c7a20506067964e1a52","616f5c7a20506067964e1a50"],
    },
    {
        name: "Admin Third List",
        user_id: "616de0428522779fb4e92a53",
        trail_id: ["616f5c7a20506067964e1a4d","616f5c7a20506067964e1a4e", "616f5c7a20506067964e1a4f","616f5c7a20506067964e1a4e"],
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