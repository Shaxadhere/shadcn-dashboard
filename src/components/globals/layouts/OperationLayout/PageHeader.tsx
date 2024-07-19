import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  title?: string;
  createButtonText?: string;
  onCreate?: () => void;
}

const PageHeader: React.FC<Props> = ({
  title,
  createButtonText = "Create New",
  onCreate,
}) => {
  return (
    <div className="flex justify-between items-center bg-white font-semibold text-3xl">
      <h2>{title}</h2>
      {onCreate && <Button onClick={onCreate}>{createButtonText}</Button>}
    </div>
  );
};

export default PageHeader;
