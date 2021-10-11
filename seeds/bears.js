const db = require("../db");
const Bear = require("../models/bear");

const createBear = async () => {
    const newBear = [
        {
            color: "black",
        },
        {
            color: "brown",
        },
        {
            color: "white",
        },
        {
            color: "panda",
        }
    ]
    await Bear.insertMany(newBear);
}

    const main = async () => {
        await createBear();
        db.close();
    }

    main();
