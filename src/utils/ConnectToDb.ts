import mongoose from "mongoose";

export async function ConnectToDb() {
  if (mongoose.connections[0].readyState === 1) return;
  await mongoose.connect(process.env.MONGO_URI as string);
  console.log("Connceted TO DB");
}
