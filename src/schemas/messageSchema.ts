import { z } from "zod";
export const messageSchema = z.object({
  content: z
    .string()
    .min(10, { message: "content must be al least 10  character" })
    .max(300, {
      message: "content must be no longer then at least 300 character",
    }),
});
