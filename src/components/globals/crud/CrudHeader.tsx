import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  title?: string;
  createButtonText?: string;
}

const CrudHeader: React.FC<Props> = ({
  title,
  createButtonText = "Create New",
}) => {
  return (
    <div className="flex justify-between items-center bg-white font-semibold text-3xl">
      <h2>{title}</h2>
      <Button>{createButtonText}</Button>
    </div>
  );
};

export default CrudHeader;
