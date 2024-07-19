import { cn } from "@/lib/utils";
import { Package2 } from "lucide-react";
import { Link } from "react-router-dom";
import SiderContent from "./SiderContent";

const Sider = () => {
  return (
    <div
      className={cn(
        `hidden bg-[#2a2a2a] md:block h-[100vh] absolute top-[0px] left-[0px] ease-out duration-300 w-[80px]`
      )}
    >
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div
          className={cn(
            "flex h-14 items-center justify-center px-4 lg:h-[60px] lg:px-2"
          )}
        >
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <Package2 className="h-6 w-6 text-gray-100" />
          </Link>
        </div>
        <SiderContent />
      </div>
    </div>
  );
};

export default Sider;
