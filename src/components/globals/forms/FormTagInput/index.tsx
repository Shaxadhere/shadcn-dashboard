import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Tag, TagInput } from "emblor";
import React from "react";
import { useForm } from "react-hook-form";

interface Props {
  control: ReturnType<typeof useForm>["control"];
  setValue: ReturnType<typeof useForm>["setValue"];
  name: string;
  label?: string;
  hint?: string;
  placeholder?: string;
}

const FormTagInput: React.FC<Props> = ({
  control,
  setValue,
  name,
  label,
  hint,
  placeholder = "Select",
}) => {
  const [tags, setTags] = React.useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(
    null
  );

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col items-start">
          <FormLabel className="text-left">{label}</FormLabel>
          <FormControl className="w-full">
            <TagInput
              {...field}
              placeholder={placeholder}
              tags={tags}
              className="sm:min-w-[450px]"
              setTags={(newTags) => {
                setTags(newTags);
                setValue(name, newTags as [Tag, ...Tag[]]);
              }}
              activeTagIndex={activeTagIndex}
              setActiveTagIndex={setActiveTagIndex}
            />
          </FormControl>
          <FormDescription className="text-left">{hint}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormTagInput;
