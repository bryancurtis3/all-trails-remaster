require("../config/db.configuration");

const { Trail } = require("../models")

const trails = [
    {
        name: "Signal Point",
        description: "A short hike to a scenic overlook",
        location: "Signal Mountain, TN",
        length: 1.2,
        elevation: 200,
        difficulty: 2,
    },
    {
        name: "Edwards Point",
        description: "A woodsy hike out to a scenic view of the river",
        location: "Signal Mountain, TN",
        length: 4.2,
        elevation: 550,
        difficulty: 3,
    },
    {
        name: "Trolltunga",
        description: "A grueling hike to an iconic overhanging rock in the fjords of Norway",
        location: "Norway",
        length: 18.9,
        elevation: 4000,
        difficulty: 5,
    },
];

const seedTrails = async function seedTrails () {
    try {
        await Trail.deleteMany({});
        const createdTrails = await Trail.insertMany(trails);
        console.log("=== Trails Seeded ===");
        console.log(createdTrails);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

seedTrails();