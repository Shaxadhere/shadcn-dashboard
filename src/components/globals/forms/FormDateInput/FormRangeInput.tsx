import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { DateRange } from "react-day-picker";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { FormItem, FormLabel } from "@/components/ui/form";
import { useController } from "react-hook-form";

type Props = {
  className?: React.HTMLAttributes<HTMLDivElement>;
  control: any;
  defaultValue?: DateRange;
};

const FormRangeInput = ({
  className,
  control,
  defaultValue = {
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  },
}: Props) => {
  const { field } = useController({
    name: "range",
    control,
    defaultValue,
  });

  return (
    <FormItem className="flex flex-col">
      <FormLabel>Date of birth</FormLabel>
      <div className={cn("grid gap-2", className)}>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !field.value && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {field.value?.from ? (
                field.value.to ? (
                  <>
                    {field.value.from && format(field.value.from, "LLL dd, y")}{" "}
                    - {field.value.to && format(field.value.to, "LLL dd, y")}
                  </>
                ) : (
                  field.value.from && format(field.value.from, "LLL dd, y")
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={field.value?.from}
              selected={field.value}
              onSelect={field.onChange}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
    </FormItem>
  );
};

export default FormRangeInput;
