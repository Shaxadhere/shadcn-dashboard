import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import useBoolean from "@/hooks/useBoolean";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  openClassName?: string;
  options?: {
    heading: string;
    items: {
      icon: any;
      label: string;
    }[];
  }[];
};

const ComboSearchInput = ({
  className,
  openClassName,
  options = [],
}: Props) => {
  const {
    setFalse: closeDropdown,
    setTrue: openDropdown,
    value: isOpen,
  } = useBoolean(false);
  return (
    <Command
      className={cn(
        "relative  rounded-lg border ",
        className,
        isOpen ? openClassName : ""
      )}
    >
      <CommandInput
        placeholder="Type a command or search..."
        className="h-9"
        onFocus={openDropdown}
        onBlur={closeDropdown}
      />
      <CommandList className="min-h-[265px]" style={{ display: isOpen ? "initial" : "none" }}>
        <CommandEmpty>No results found.</CommandEmpty>
        {options.map((group, index) => {
          return (
            <>
              {index > 0 && <CommandSeparator />}
              <CommandGroup key={index} heading={group.heading}>
                {group.items.map((item, index) => (
                  <CommandItem key={index}>
                    <item.icon className="mr-2 h-4 w-4" />
                    <span>{item.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          );
        })}
      </CommandList>
    </Command>
  );
};

export default ComboSearchInput;
