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
};

const FormCheckbox = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="items"
      render={() => (
        <FormItem>
          <div className="mb-4">
            <FormLabel className="text-base">Sidebar</FormLabel>
            <FormDescription>
              Select the items you want to display in the sidebar.
            </FormDescription>
          </div>
          {items.map((item) => (
            <FormField
              key={item.id}
              control={control}
              name="items"
              render={({ field }) => {
                return (
                  <FormItem
                    key={item.id}
                    className="flex flex-row items-start space-x-3 space-y-0"
                  >
                    <FormControl>
                      <Checkbox
                        checked={field?.value?.includes(item.id)}
                        onCheckedChange={(checked) => {
                          return checked
                            ? field.onChange(
                                Array.isArray(field?.value)
                                  ? [...field?.value, item.id]
                                  : [item.id]
                              )
                            : field.onChange(
                                field?.value?.filter(
                                  (value: any) => value !== item.id
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
