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
  isRequired?: boolean;
}

const FormPinInput: React.FC<Props> = ({
  control,
  name,
  label,
  count = 6,
  hint,
  isRequired,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>
            {label}
            {isRequired && <span className="text-red-500">*</span>}
          </FormLabel>
          <FormControl>
            <InputOTP maxLength={count + 1} {...field}>
              <InputOTPGroup className="w-full">
                {new Array(count + 1).fill(null).map((item, index) => (
                  <InputOTPSlot className="w-full" index={index} key={index} />
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
