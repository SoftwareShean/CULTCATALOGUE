const db = require('../db/connection')
const Message = require('../models/message')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
await Message.deleteMany()
  const messages = [
      {
      "email": "no@reply.com", 
      "message": "this is the message"
      }, 
      {
      "email": "no@reply.com", 
      "message": "this too is the message"
      }
    ]
    await Message.insertMany(messages)
      console.log("Created messages!")
}

const run = async () => {
  await main();
  db.close();
}

run();