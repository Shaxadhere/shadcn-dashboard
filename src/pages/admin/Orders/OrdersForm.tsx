import FormModal from "@/components/globals/modals/FormModal";
import useBoolean from "@/hooks/useBoolean";
import React from "react";
import FormInput from "@/components/globals/forms/FormInput";
import FormTextarea from "@/components/globals/forms/FormTextarea";
import { useOrderForm } from "./OrdersContainer";

interface Props {
  formState: ReturnType<typeof useBoolean>;
  data: any;
  onClose: () => void;
}

const OrdersForm: React.FC<Props> = ({ formState, data, onClose }) => {
  const { form, onSubmit, title } = useOrderForm({ formState, data, onClose });
  return (
    <FormModal
      form={form}
      onSubmit={onSubmit}
      onClose={onClose}
      formState={formState}
      title={title}
      subtitle="Fill in the form below to create a new order."
    >
      <FormInput
        control={form.control}
        name="username"
        hint="This will be your public username"
        label="Username"
        placeholder="Shadcn"
      />
      <FormTextarea
        control={form.control}
        name="bio"
        hint="Tell us about yourself in 160 characters or less."
        label="Bio"
        placeholder="I'm a software engineer who loves to code and build things."
      />
    </FormModal>
  );
};

export default OrdersForm;
