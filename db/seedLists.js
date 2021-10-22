
/* ====!!!! Must be run After the seedTrails.js !!!!==== */

/*  == and updated manually == */


require("../config/db.configuration");
const { List, User } = require("../models");

/* find user by user name
generate trail ids radomly usind math.random() to to hit the trial ids like in an array maybe */

const lists = [];

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