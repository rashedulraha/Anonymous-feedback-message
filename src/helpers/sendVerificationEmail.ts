import { ApiResponse } from "@/types/apiResponse";
import VerificationEmail from "../../emails/verificationEmail";
import { resend } from "@/lib/resend";

export const sendVerificationEmail = async (
  email: string,
  username: string,
  verifyCode: string
): Promise<ApiResponse> => {
  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: email,
      subject: "Feedback  | Verification code",
      react: VerificationEmail({ username, otp: verifyCode }),
    });
    return { success: true, message: "verification email send successfully" };
  } catch (emailError) {
    console.error("Email sending verification email", emailError);
    return { success: false, message: "Failed to send verification email" };
  }
};
