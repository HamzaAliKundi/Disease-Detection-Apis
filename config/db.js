const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = async () => {
   localUrl = "mongodb://localhost:27017/heart-disease-detection";
   try {
      const conn = await mongoose.connect(localUrl);
      console.log(`mongoDB connected : ${conn.connection.host}`);
   } catch (error) {
      console.log("Connected error : ", error);
      process.exit(1);
   }
};

module.exports = connectDB;