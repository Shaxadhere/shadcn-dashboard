import React from "react";
import { CalendarDays } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface Props {
  triggerComponent?: () => React.ReactNode;
  triggerText?: string;
  children: React.ReactNode;
}

const HoverCardPopover: React.FC<Props> = ({
  triggerComponent,
  triggerText,
  children,
}) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {triggerComponent ? (
          triggerComponent()
        ) : (
          <Button variant="link">{triggerText}</Button>
        )}
      </HoverCardTrigger>
      <HoverCardContent className="w-80">{children}</HoverCardContent>
    </HoverCard>
  );
};

export default HoverCardPopover;
