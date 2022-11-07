import mongoose from "mongoose";

export async function connectToMongo() {
  try {
    await mongoose.connect("mongodb://localhost:27017/journy-graphql");
    console.log("Connect to the DataBase");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
