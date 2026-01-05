import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import dbConnect from "@/lib/dbConnect";
import userModel from "@/model/User";
import bcryptjs from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();

  try {
  } catch (error) {
    console.error("Error Registering user", error);
    return Response.json({
      success: false,
      message: "Error registering user",
    });
  }
}
