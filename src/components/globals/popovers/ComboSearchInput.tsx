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
};

const ComboSearchInput = ({ className, openClassName }: Props) => {
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
        onFocus={openDropdown}
        onBlur={closeDropdown}
      />
      <CommandList style={{ display: isOpen ? "initial" : "none" }}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default ComboSearchInput;
