import { z } from "zod";

export const loginFormSchema = z.object({
  email: z.string().email(),
  password: z.string({
    required_error: "Please enter your password.",
  }),
});
