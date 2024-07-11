import { Checkbox } from "@/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const items = [
  {
    id: "recents",
    label: "Recents",
  },
  {
    id: "home",
    label: "Home",
  },
  {
    id: "applications",
    label: "Applications",
  },
  {
    id: "desktop",
    label: "Desktop",
  },
  {
    id: "downloads",
    label: "Downloads",
  },
  {
    id: "documents",
    label: "Documents",
  },
] as const;

type Props = {
  control: any;
  options: { label: string; value: any }[];
  name: string;
  hint?: string;
  label?: string;
};

const FormCheckbox = ({ control, name, options = [], hint, label }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">{label}</FormLabel>
            <FormDescription>{hint}</FormDescription>
          </div>
          {options.map((item) => (
            <FormField
              key={item.value}
              control={control}
              name={name}
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.value}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field?.value?.includes(item.value)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange(
                                Array.isArray(field?.value)
                                  ? [...field?.value, item.value]
                                  : [item.value]
                              )
                            : field.onChange(
                                field?.value?.filter(
                                  (value: any) => value !== item.value
                                )
                              );
                        }}
                      />
                    </FormControl>
                    <FormLabel className="font-normal">{item.label}</FormLabel>
                  </FormItem>
                );
              }}
            />
          ))}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormCheckbox;
