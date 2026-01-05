import mongoose from "mongoose";

type connectionObject = {
  isConnect?: number;
};

const connection: connectionObject = {};

async function dbConnect(): Promise<void> {
  //  checking connection data base
  if (connection.isConnect) {
    console.log("already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    connection.isConnect = db.connections[0].readyState;

    //  db connection successfully
    console.log("db connection successfully");
  } catch (error) {
    console.log("data base connection failed", error);
    process.exit();
  }
}

export default dbConnect;
