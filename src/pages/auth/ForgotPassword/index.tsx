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
import { forgotPasswordFormSchema } from "@/schemas/forgot-password-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof forgotPasswordFormSchema>>({
    resolver: zodResolver(forgotPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof forgotPasswordFormSchema>) => {
    console.log(values);
    navigate("/auth/verify-email");
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[400px] gap-6">
        <div className="grid gap-2">
          <Card className="mx-auto w-[400px]">
            <CardHeader>
              <CardTitle className="text-xl">Forgot Password?</CardTitle>
              <CardDescription>
                Enter your email address below to reset your password
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
                      label="Email"
                      name="email"
                      type="email"
                      hint="Enter your email address"
                      placeholder="someone@example.com"
                      control={form.control}
                      rightIcon={Mail}
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

export default ForgotPassword;
