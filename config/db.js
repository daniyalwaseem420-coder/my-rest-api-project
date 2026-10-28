const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Temporary Memory Database Start kar rahe hain
    const { MongoMemoryServer } = require('mongodb-memory-server');
    const mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    const conn = await mongoose.connect(uri);
    console.log(`✅ In-Memory Database Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ DB Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;