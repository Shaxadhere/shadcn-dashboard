import { menus } from "@/constants/menus";
import { cn } from "@/lib/utils";
import React from "react";
import SiderItem from "./SiderItem";

interface Props {
  isSiderOpen: boolean;
}

const SiderContent: React.FC<Props> = ({ isSiderOpen }) => {
  return (
    <div className="flex-1">
      <nav
        className={cn(
          "flex flex-col justify-start px-2 text-sm font-medium lg:px-4 gap-1",
          {
            "lg:px-2 justify-center gap-2": !isSiderOpen,
          }
        )}
      >
        {menus.map((menu, index) => (
          <SiderItem {...menu} isSiderOpen={isSiderOpen} key={index} />
        ))}
      </nav>
    </div>
  );
};

export default SiderContent;
