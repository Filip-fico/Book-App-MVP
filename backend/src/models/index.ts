import mongoose from "mongoose";

const uri = process.env.MONGODB_URI!;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

