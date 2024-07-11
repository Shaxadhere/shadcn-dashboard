import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import FormSwitch from "@/components/globals/forms/FormSwitch";

type Props = {
  control: any;
  title: string;
  hint?: string;
  name: string;
};

const FormSwitchCard = ({ control, title, hint, name }: Props) => {
  return (
    <div className="space-y-4">
      <FormField
        control={control}
        name="marketing_emails"
        render={({ field }) => (
          <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
            <div className="space-y-0.5">
              <FormLabel className="text-base">{title}</FormLabel>
              <FormDescription>{hint}</FormDescription>
            </div>
            <FormControl>
              <FormSwitch control={control} name={name} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default FormSwitchCard;
