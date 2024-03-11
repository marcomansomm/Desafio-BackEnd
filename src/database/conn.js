const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const uri = `${process.env.URI_CONN}`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("Pinged your deploy. You successfully connected to MongoDB!");
  } catch (error) {
    console.log(error)
  }
}

module.exports = run;