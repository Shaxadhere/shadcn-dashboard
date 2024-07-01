import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { CircleUser } from "lucide-react";

interface DropdownOption {
  label: string;
  onClick: () => void;
  isSeparator?: boolean;
}

interface AppDropdownProps {
  options: DropdownOption[];
}

const AppDropdown: React.FC<AppDropdownProps> = ({ options }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option, index) =>
          option.isSeparator ? (
            <DropdownMenuSeparator key={index} />
          ) : (
            <DropdownMenuItem key={index} onClick={option.onClick}>
              {option.label}
            </DropdownMenuItem>
          )
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AppDropdown;
