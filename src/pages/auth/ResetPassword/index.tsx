import FormInput from "@/components/globals/forms/FormInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { resetPasswordFormSchema } from "@/schemas/reset-password-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const ResetPassword = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (values: z.infer<typeof resetPasswordFormSchema>) => {
    console.log(values);
    navigate("/auth/verify-email");
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[400px] gap-6">
        <div className="grid gap-2">
          <Card className="mx-auto w-[400px]">
            <CardHeader>
              <CardTitle className="text-xl">Reset Password</CardTitle>
              <CardDescription>
                Set a new password for your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid gap-4">
                    <FormInput
                      label="Create Password"
                      name="newPassword"
                      hint="Create a new password"
                      placeholder="*********"
                      control={form.control}
                      inputProps={{ autoComplete: "new-password" }}
                      secureTextEntry
                      isRequired
                    />
                    <FormInput
                      label="Confirm Password"
                      name="confirmPassword"
                      hint="Confirm your new password"
                      placeholder="*********"
                      control={form.control}
                      inputProps={{ autoComplete: "new-password" }}
                      secureTextEntry
                      isRequired
                    />
                    <Button type="submit" className="w-full">
                      Submit
                    </Button>
                  </div>
                </form>
              </Form>
              <div className="mt-4 text-center text-sm">
                Know your password?{" "}
                <Link to="/auth/login" className="underline">
                  Login
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
