const db = require("../db");
const User = require("../models/user");
const Letter = require("../models/letter");
const faker = require("faker");

const createLetter = async () => {
    const sender = await User.findOne({ username: "beeboop12" });
    const derpherder31 = await User.findOne({ username: "derpherder31" });
    const herrderr543 = await User.findOne({ username: "herrderr543" });
    const newLetter = [
        {
            title: faker.lorem.words(6),
            letter: faker.lorem.paragraph(),
            recipient: derpherder31._id,
            sender: sender._id
        },
        {
            title: faker.lorem.words(6),
            letter: faker.lorem.paragraph(),
            recipient: herrderr543._id,
            sender: sender._id
        }
        
    ]
    await Letter.insertMany(newLetter);
};

const main = async () => {
    await createLetter();
    db.close()
}

main();