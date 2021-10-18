require("../config/db.configuration");

const { Trail } = require("../models")

const trails = [
    {
        name: "Signal Point",
        description: "A short hike to a scenic overlook in Signal Mountain, TN. This trail has a steep stair section which may not be suitable for the less nimble.",
        location: "Signal Mountain, TN",
        length: 1.2,
        elevation: 200,
        difficulty: 1,
        image: "https://i.imgur.com/yinQ7OR.jpg",
    },
    {
        name: "Edwards Point",
        description: "A woodsy hike out to a scenic view of the river. There is a quaint creek and blue hole area part way into the hike which is great for a swim in the summer.",
        location: "Signal Mountain, TN",
        length: 4.2,
        elevation: 550,
        difficulty: 2,
        image: "https://i.imgur.com/yinQ7OR.jpg",
    },
    {
        name: "Trolltunga",
        description: "A grueling hike to an iconic overhanging rock in the fjords of Norway",
        location: "Norway",
        length: 18.9,
        elevation: 4000,
        difficulty: 5,
        image: "https://i.imgur.com/yinQ7OR.jpg",
    },
    {
        name: "Alum Cave to Mount LeConte",
        description: "A scenic uphill trek through the Smoky Mountains",
        location: "Smoky Mountains National Park",
        length: 11,
        elevation: 3000,
        difficulty: 4,
        image: "https://i.imgur.com/yinQ7OR.jpg",
    },
    {
        name: "Devil's Garden",
        description: "A famous hike through scenic Arches",
        location: "Arches National Park",
        length: 8,
        elevation: 1000,
        difficulty: 3,
        image: "https://i.imgur.com/yinQ7OR.jpg",
    },
    {
        name: "High Dune Trail",
        description: "A sandy climb up one of the tallest sand dunes in the park",
        location: "Great Sand Dunes National Park",
        length: 3,
        elevation: 700,
        difficulty: 3,
        image: "https://i.imgur.com/yinQ7OR.jpg",
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