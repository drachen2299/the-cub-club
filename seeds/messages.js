const db = require("../db");
const User = require("../models/user");
const Message = require("../models/message");
const faker = require("faker");

const createMessage = async () => {
    const sender = await User.findOne({ username: "beeboop12" });
    const derpherder31 = await User.findOne({ username: "derpherder31" });
    const herrderr543 = await User.findOne({ username: "herrderr543" });
    const newMessage = [
        {
            title: faker.lorem.words(6),
            message: faker.lorem.paragraph(),
            recipient: derpherder31._id,
            sender: sender._id
        },
        {
            title: faker.lorem.words(6),
            message: faker.lorem.paragraph(),
            recipient: herrderr543._id,
            sender: sender._id
        }
        
    ]
    await Message.insertMany(newMessage);
};

const main = async () => {
    await createMessage();
    db.close()
}

main();