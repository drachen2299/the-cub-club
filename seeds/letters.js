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
            letter: faker.lorem.paragraph(),
            recipient: herrderr543._id,
            sender: sender._id
        },
        {
            letter: faker.lorem.paragraph(),
            recipient: herrderr543._id,
            sender: sender._id
        }
        
    ]
    await Letter.deleteMany();
    await Letter.insertMany(newLetter);
};

const main = async () => {
    await createLetter();
    db.close()
}

main();