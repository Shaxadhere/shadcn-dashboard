import FormPinInput from "@/components/globals/forms/FormPinInput";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { verifyEmailFormSchema } from "@/schemas/verify-email-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof verifyEmailFormSchema>>({
    resolver: zodResolver(verifyEmailFormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const onSubmit = (values: z.infer<typeof verifyEmailFormSchema>) => {
    console.log(values);
    navigate("/auth/reset-password");
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[400px] gap-6">
        <div className="grid gap-2">
          <Card className="mx-auto w-[400px]">
            <CardHeader>
              <CardTitle className="text-xl">Verify Email</CardTitle>
              <CardDescription>
                Enter OTP sent to your email address to verify your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid gap-4">
                    <FormPinInput
                      control={form.control}
                      name="pin"
                      count={5}
                      hint="Please enter the one-time password sent to your email."
                      label="OTP"
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

export default VerifyEmail;
