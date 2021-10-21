/* ====!!!! Must be run After the seedTrails.js && seedUser!!!!==== */
/*  == and updated manually == */


require("../config/db.configuration");
const { Plan } = require("../models");

/* find user by user name
generate trail ids radomly usind math.random() to to hit the trial ids like in an array maybe */

const plans = [
    {
        user_id: "616de0428522779fb4e92a53",
        gear:[ "Gear List"],
    },
];

const seedPlan = async function seedPlan(){
    try{
        await Plan.deleteMany({});
        const createdPlans = await Plan.insertMany(plans);
        console.log("=== Plans Seeded ===");
        console.log(createdPlans);
        process.exit();
    }
    catch (error) {
        console.log(error);
    }
}
seedPlan();