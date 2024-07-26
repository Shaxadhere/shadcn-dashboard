import { NEW_PASSWORD_REGEX } from "@/constants/regex";
import { z } from "zod";

export const resetPasswordFormSchema = z.object({
  newPassword: z
    .string()
    .min(6, {
      message: "Password must be at least 6 characters.",
    })
    .max(30, {
      message: "Password must not be longer than 30 characters.",
    })
    .regex(NEW_PASSWORD_REGEX, {
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, one special charecter and one number.",
    }),
  confirmPassword: z
    .string()
    .refine((value) => value === resetPasswordFormSchema.newPassword, {
      message: "Passwords do not match.",
    }),
});
