import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  title?: string;
  triggerComponent?: () => React.ReactNode;
  children?: React.ReactNode;
}

const CommonPopover: React.FC<Props> = ({
  title,
  triggerComponent,
  children,
}) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {triggerComponent ? (
          triggerComponent()
        ) : (
          <Button variant="outline">{title}</Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-80">{children}</PopoverContent>
    </Popover>
  );
};

export default CommonPopover;
