import FormInput from "@/components/globals/forms/FormInput";
import FormSelect from "@/components/globals/forms/FormSelect";
import FormModal from "@/components/globals/modals/FormModal";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import todoFormSchema from "./todo-form-schema";

interface Props {}

const TodoForm: React.FC<Props> = () => {
  const form = useForm<z.infer<typeof todoFormSchema>>({
    resolver: zodResolver(todoFormSchema),
    defaultValues: {
      username: "",
    },
  });

  const onSubmit = (values: z.infer<typeof todoFormSchema>) => {
    console.log(values);
  };
  return (
    <FormModal
      form={form}
      onSubmit={onSubmit}
      onClose={() => console.log("form modal closed!")}
    >
      <FormInput control={form.control} />
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
    </FormModal>
  );
};

export default TodoForm;
