import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  title?: string;
  subtitle?: string;
  actionText?: string;
  onActionClick?: () => void;
}

const NoDataActionBox: React.FC<Props> = ({
  actionText,
  onActionClick,
  subtitle,
  title,
}) => {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm p-5">
      <div className="flex flex-col items-center gap-1 text-center">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
        <Button className="mt-4" onClick={onActionClick}>
          {actionText}
        </Button>
      </div>
    </div>
  );
};

export default NoDataActionBox;
