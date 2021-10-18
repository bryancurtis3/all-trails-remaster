
/* ====!!!! Must be run After the seedTrails.js !!!!==== */

require("../config/db.configuration");
const { List } = require("../models");

const lists = [
    {
        name: "Admin Favorites",
        user_id: "616da6433c5a6212dfc64ccb",
        trail_id: ["616da39cc35dc789d8eb24db","616da39cc35dc789d8eb24dc", "616da39cc35dc789d8eb24e0"],
    }
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