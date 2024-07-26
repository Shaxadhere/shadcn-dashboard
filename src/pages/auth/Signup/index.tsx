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
import { signupFormSchema } from "@/schemas/signup-form-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const Signup = () => {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    console.log(values);
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[400px] gap-6">
        <div className="grid gap-4">
          <Card className="mx-auto max-w-sm">
            <CardHeader>
              <CardTitle className="text-xl">Sign Up</CardTitle>
              <CardDescription>
                Enter your information to create an account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="grid gap-2">
                        <FormInput
                          label="First name"
                          name="firstName"
                          hint="Enter your first name"
                          placeholder="John"
                          control={form.control}
                          isRequired
                        />
                      </div>
                      <div className="grid gap-2">
                        <FormInput
                          label="Last name"
                          name="lastName"
                          hint="Enter your last name"
                          placeholder="Doe"
                          control={form.control}
                          isRequired
                        />
                      </div>
                    </div>
                    <div className="grid gap-2">
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
                    </div>
                    <div className="grid gap-2">
                      <FormInput
                        label="Password"
                        name="password"
                        hint="Enter your password"
                        placeholder="*********"
                        control={form.control}
                        inputProps={{ autoComplete: "new-password" }}
                        secureTextEntry
                        isRequired
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Create an account
                    </Button>
                  </div>
                  <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/auth/login" className="underline">
                      Login
                    </Link>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Signup;
