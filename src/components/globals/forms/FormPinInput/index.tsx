import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import React from "react";

interface Props {
  control: any;
  name: string;
  label?: string;
  count?: number;
  hint?: string;
}

const FormPinInput: React.FC<Props> = ({
  control,
  name,
  label,
  count = 6,
  hint,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <InputOTP maxLength={count} {...field}>
              <InputOTPGroup>
                {new Array(count).fill(null).map((item, index) => (
                  <InputOTPSlot index={index} key={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          </FormControl>
          <FormDescription>{hint}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormPinInput;
