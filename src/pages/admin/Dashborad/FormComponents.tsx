import FormCheckbox from "@/components/globals/forms/FormCheckbox";
import FormDateInput from "@/components/globals/forms/FormDateInput";
import FormRangeInput from "@/components/globals/forms/FormDateInput/FormRangeInput";
import FormTimeInput from "@/components/globals/forms/FormDateInput/FormTimeInput";
import FormInput from "@/components/globals/forms/FormInput";
import FormRadio from "@/components/globals/forms/FormRadio";
import FormSelect from "@/components/globals/forms/FormSelect";
import FormSearchSelect from "@/components/globals/forms/FormSelect/FormSearchSelect";
import FormSwitch from "@/components/globals/forms/FormSwitch";
import FormSwitchCard from "@/components/globals/forms/FormSwitch/FormSwitchCard";
import FormTextarea from "@/components/globals/forms/FormTextarea";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  dob: z.date({
    required_error: "A date of birth is required.",
  }),
  type: z.enum(["all", "mentions", "none"], {
    required_error: "You need to select a notification type.",
  }),
  email: z
    .string({
      required_error: "Please select an email to display.",
    })
    .email(),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
  bio: z
    .string()
    .min(10, {
      message: "Bio must be at least 10 characters.",
    })
    .max(160, {
      message: "Bio must not be longer than 30 characters.",
    }),
  language: z.string({
    required_error: "Please select a language.",
  }),
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
});

const FormComponents = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <div>
      <h1 className="mb-2 text-lg font-bold">Forms</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="flex gap-5 flex-col">
            <FormInput
              control={form.control}
              name="username"
              hint="This will be your public username"
              label="Username"
              placeholder="Shadcn"
            />
            <FormDateInput control={form.control} />
            <FormRangeInput control={form.control} />
            <FormTimeInput
              control={form.control}
              setDate={(e) => console.log(e)}
              date={new Date()}
            />
            <FormRadio control={form.control} />
            <FormSelect
              name="email"
              hint="This will be your public username."
              label="Email"
              placeholder="Select an email to display"
              control={form.control}
              options={[
                { label: "Option 1", value: "1" },
                { label: "Option 2", value: "2" },
                { label: "Option 3", value: "3" },
                { label: "Option 4", value: "4" },
                { label: "Option 5", value: "5" },
              ]}
            />
            <FormSwitchCard control={form.control} />
            <div className="max-w-[250px]">
              <FormSwitch control={form.control} />
            </div>
            <FormTextarea control={form.control} />
            <FormSearchSelect
              control={form.control}
              setValue={form.setValue}
              options={[
                { label: "English", value: "en" },
                { label: "French", value: "fr" },
                { label: "German", value: "de" },
                { label: "Spanish", value: "es" },
                { label: "Portuguese", value: "pt" },
                { label: "Russian", value: "ru" },
                { label: "Japanese", value: "ja" },
                { label: "Korean", value: "ko" },
                { label: "Chinese", value: "zh" },
              ]}
            />
            <FormCheckbox control={form.control} />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default FormComponents;
