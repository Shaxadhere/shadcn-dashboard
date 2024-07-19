import { Button } from "@/components/ui/button";
import { scheme } from "@/types/ui-types";
import React from "react";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  scheme?: scheme;
  className?: string;
}

const getSchemeClass = (scheme: scheme) => {
  let colorsClass = "";
  switch (scheme) {
    case "primary":
      colorsClass = "bg-primary text-white";
      break;
    case "secondary":
      colorsClass = "bg-secondary text-white";
      break;
    case "danger":
      colorsClass = "bg-danger text-white";
      break;
    case "success":
      colorsClass = "bg-success text-white";
      break;
    default:
      break;
  }
  return colorsClass;
};

const CommonButton: React.FC<Props> = ({
  children,
  scheme,
  className,
  ...rest
}) => {
  let colorsClass = getSchemeClass(scheme);
  return (
    <Button className={`${className} ${colorsClass}`} {...rest}>
      {children}
    </Button>
  );
};

export default CommonButton;
