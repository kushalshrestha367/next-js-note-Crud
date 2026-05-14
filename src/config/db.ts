import mongoose from "mongoose";
import envConfig from "./config.js";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log("Connected to MongoDB");
        });
         await mongoose.connect(envConfig.mongodbString as string);
    } catch (error) {
        console.error("Failed to Connect");
        process.exit(1);
    }
}

export default connectDB;
        