import FormInput from "@/components/globals/forms/FormInput";
import FormSelect from "@/components/globals/forms/FormSelect";
import FormModal from "@/components/globals/modals/FormModal";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import todoFormSchema from "./todo-form-schema";
import useBoolean from "@/hooks/useBoolean";

interface Props {}

const TodoForm: React.FC<Props> = () => {
  const formState = useBoolean();
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
      formState={formState}
      title="Create Todo"
      subtitle="Fill in the form below to create a new todo."
    >
      <FormInput
        control={form.control}
        name="todo"
        hint="This will be your todo title"
        label="Title"
        placeholder="Code for 100 hours straight"
      />
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
