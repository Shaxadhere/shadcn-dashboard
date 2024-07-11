import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Props = {
  control: any;
  setValue: any;
  options: { label: string; value: any }[];
  name: string;
  label?: string;
  noOptionsMessage?: string;
  hint?: string;
};

const FormSearchSelect = ({
  control,
  setValue,
  options,
  name,
  label,
  hint,
  noOptionsMessage = "No option found.",
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>{label}</FormLabel>
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant="outline"
                  role="combobox"
                  className={cn(
                    "w-[200px] justify-between",
                    !field?.value && "text-muted-foreground"
                  )}
                >
                  {field?.value
                    ? options?.find((option) => option.value === field?.value)
                        ?.label
                    : "Select option"}
                  <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Type to search..." />
                <CommandList>
                  <CommandEmpty>{noOptionsMessage}</CommandEmpty>
                  <CommandGroup heading="Suggestions">
                    {options?.map((option) => (
                      <CommandItem
                        value={option.label}
                        key={option.value}
                        onSelect={() => {
                          setValue("option", option.value);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 h-4 w-4",
                            option.value === field?.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        {option.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <FormDescription>
           {hint}
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSearchSelect;
