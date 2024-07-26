import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff, Icon } from "lucide-react";
import useBoolean from "@/hooks/useBoolean";
import React, { HTMLInputTypeAttribute } from "react";

type Props = {
  control: any;
  label?: string;
  hint?: string;
  placeholder?: string;
  name: string;
  type?: string;
  secureTextEntry?: boolean;
  rightIcon?: any;
  isRequired?: boolean;
  inputProps?: any;
};

const FormInput = ({
  control,
  label,
  hint,
  placeholder,
  name,
  type = "text",
  secureTextEntry,
  rightIcon,
  isRequired,
  inputProps,
}: Props) => {
  const secureEntry = useBoolean(true);
  const IconComponent = rightIcon;
  const iconClassName =
    "w-5 absolute right-0 top-0 m-2.5 h-4 w-4 text-muted-foreground user-select-none cursor-pointer";
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
          <div className="relative w-full">
            <FormControl>
              <Input
                className="pr-9"
                type={secureTextEntry && secureEntry.value ? "password" : type}
                placeholder={placeholder}
                {...inputProps}
                {...field}
              />
            </FormControl>
            {secureTextEntry &&
              (secureEntry.value ? (
                <Eye onClick={secureEntry.toggle} className={iconClassName} />
              ) : (
                <EyeOff
                  onClick={secureEntry.toggle}
                  className={iconClassName}
                />
              ))}
            {!secureTextEntry && rightIcon && (
              <IconComponent className={iconClassName} />
            )}
          </div>
          <FormDescription>{hint}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormInput;
