import { menus, menus2 } from "@/constants/menus";
import { cn } from "@/lib/utils";
import SiderItem from "./SiderItem";

const SiderContent = () => {
  return (
    <div className="flex-1">
      <nav
        className={cn(
          "flex flex-col justify-start px-2 text-sm font-medium lg:px-1"
        )}
      >
        {menus2.map((menu, index) => (
          <SiderItem {...menu} key={index} />
        ))}
      </nav>
    </div>
  );
};

export default SiderContent;
