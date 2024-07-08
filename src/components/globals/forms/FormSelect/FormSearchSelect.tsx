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
  options: any[];
};

const FormSearchSelect = ({ control, setValue, options }: Props) => {
  return (
    <FormField
      control={control}
      name="option"
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel>Language</FormLabel>
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
                  <CommandEmpty>No option found.</CommandEmpty>
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
            This is the option that will be used in the dashboard.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormSearchSelect;
