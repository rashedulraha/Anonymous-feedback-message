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
}
