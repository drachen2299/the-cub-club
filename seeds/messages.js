const db = require("../db");
const User = require("../models/user");
const Message = require("../models/message");
const faker = require("faker");

const createMessage = async () => {
    const user = await User.findOne({ username: "beeboop12" });
    const newMessage = [
        {
            title: faker.lorem.words(6),
            author: user._id,
            message: faker.lorem.paragraph()
        },
        {
            title: faker.lorem.words(6),
            author: user._id,
            message: faker.lorem.paragraph()
        },
        {
            title: faker.lorem.words(6),
            author: user._id,
            message: faker.lorem.paragraph()
        }
    ]
    await Message.insertMany(newMessage);
};

const main = async () => {
    await createMessage();
    db.close()
}

main();