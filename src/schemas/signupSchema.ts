import { z } from "zod";

const userNameValidation = z
  .string()
  .min(2, "userName most be at least 2 character")
  .max(20, "user name most be on more then 20 character")
  .regex(/^[a-zA-Z0-9]{3,16}$/, "user name must not contain special character");

export const signupSchema = z.object({
  userName: userNameValidation,
  email: z.string().email({ message: "invalid email address" }),
  password: z.string().min(6, { message: "password must be 6 character" }),
});
