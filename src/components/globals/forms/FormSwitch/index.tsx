import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";

type Props = {
  control: any;
};

const FormSwitch = ({ control }: Props) => {
  return (
    <FormField
      control={control}
      name="security_emails"
      render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg  p-4">
          <div className="space-y-0.5">
            <FormLabel className="text-base">Marketing emails?</FormLabel>
          </div>
          <FormControl>
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormSwitch;
