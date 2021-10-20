require("../config/db.configuration");

const { Trail, Review } = require("../models")

const trails = [
    {
        name: 'Torres Del Paine "W" Circuit',
        description: "A long trek through the wilds of Chilean Patagonia, this trail is a famous route that features mountains, galciers, lakes, and exotic plant life. ",
        location: "Torres Del Paine, Patagonia",
        length: 43.1,
        elevation: 8956,
        style: "Out & Back",
        difficulty: 5,
        image: "https://i.imgur.com/tkWtYEv.jpg",
    },
    {
        name: "Edwards Point",
        description: "A woodsy hike out to a scenic view of the river. There is a quaint creek and blue hole area part way into the hike which is great for a swim in the summer.",
        location: "Signal Mountain, TN",
        length: 4.2,
        elevation: 550,
        style: "Out & Back",
        difficulty: 2,
        image: "https://i.imgur.com/N50VDOX.jpg",
    },
    {
        name: "Trolltunga",
        description: "A grueling hike to an iconic overhanging rock in the fjords of Norway",
        location: "Norway",
        length: 18.9,
        elevation: 4000,
        style: "Out & Back",
        difficulty: 5,
        image: "https://i.imgur.com/u2DdFSx.jpg",
    },
    {
        name: "Alum Cave to Mount LeConte",
        description: "A scenic uphill trek through the Smoky Mountains",
        location: "Smoky Mountains National Park",
        length: 11,
        elevation: 3000,
        style: "Out & Back",
        difficulty: 4,
        image: "https://i.imgur.com/CkrbxU9.jpg",
    },
    {
        name: "Devil's Garden",
        description: "A famous hike through scenic Arches",
        location: "Arches National Park",
        length: 7.9,
        elevation: 1006,
        style: "Loop",
        difficulty: 3,
        image: "https://i.imgur.com/47YZn5r.jpg",
    },
    {
        name: "Eibsee Loop",
        description: "Eibsee Loop is a 4.3 mile heavily trafficked loop trail located near Grainau, Bavaria, Germany that features a lake and is good for all skill levels. The trail is primarily used for hiking and walking and is best used from May until October.",
        location: "Bavaria, Germany",
        length: 4.3,
        elevation: 705,
        style: "Loop",
        difficulty: 2,
        image: "https://i.imgur.com/ltTZBX6.jpg",
    },
];

const seedTrails = async function seedTrails () {
    try {
        await Trail.deleteMany({});
        await Review.deleteMany({});
        const createdTrails = await Trail.insertMany(trails);
        console.log("=== Trails Seeded ===");
        console.log(createdTrails);
        process.exit();
    } catch (error) {
        console.log(error);
    }
}

seedTrails();