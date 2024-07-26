import { z } from "zod";

export const signupFormSchema = z.object({
  firstName: z
    .string({
      required_error: "First name is required.",
    })
    .min(1, {
      message: "First name is required.",
    }),
  lastName: z
    .string({
      required_error: "Last name is required.",
    })
    .min(1, {
      message: "Last name is required.",
    }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .max(30, {
      message: "Password must not be longer than 30 characters.",
    }),
});
