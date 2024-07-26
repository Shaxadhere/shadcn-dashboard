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
import { loginFormSchema } from "@/schemas/login-form-schemas";
import { useBearStore } from "@/store";
import { AuthState } from "@/types/state-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";

const Login = () => {
  const { setIsAuth } = useBearStore((state: AuthState) => ({
    setIsAuth: state.setIsAuth,
  }));

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof loginFormSchema>) => {
    console.log(values);
    setIsAuth(true);
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="mx-auto grid w-[400px] gap-6">
        <div className="grid gap-2">
          <Card className="mx-auto w-[400px]">
            <CardHeader>
              <CardTitle className="text-xl">Login</CardTitle>
              <CardDescription>
                Enter your credentials below to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-8"
                >
                  <div className="grid gap-4">
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
                      <FormInput
                        label="Password"
                        name="password"
                        hint="Enter your password"
                        placeholder="*********"
                        control={form.control}
                        secureTextEntry
                        isRequired
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center">
                        <Link
                          to="/auth/forgot-password"
                          className="ml-auto inline-block text-sm underline"
                        >
                          Forgot your password?
                        </Link>
                      </div>
                    </div>
                    <Button type="submit" className="w-full">
                      Login
                    </Button>
                  </div>
                </form>
              </Form>
              <div className="mt-4 text-center text-sm">
                Don't have an account?{" "}
                <Link to="/auth/signup" className="underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
