const db = require("../db");
const User = require("../models/user");
const {hashPassword} = require("../utils");

const createUser = async () => {
    const newUser = [
    {
        username: "beeboop12",
        email: "beeb@email.com",
        password: hashPassword("testpassword"),
        bear: {
            color: "panda"
        }
    },
    {
        username: "derpherder31",
        email: "derp31@email.com",
        password: hashPassword("testpassword"),
        bear: {
            color: "panda"
        }
    },
    {
        username: "herrderr543",
        email: "heer543@email.com",
        password: hashPassword("testpassword"),
        bear: {
            color: "panda"
        }
    }
]

await User.insertMany(newUser)
};

const main = async () => {
    await createUser();
    db.close()
}

main();