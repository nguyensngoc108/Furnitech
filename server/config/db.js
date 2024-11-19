const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connection success!");
  } catch (err) {
    console.log("MongoDB connection failed!", err.message);
  }
};

module.exports = {connectDB};