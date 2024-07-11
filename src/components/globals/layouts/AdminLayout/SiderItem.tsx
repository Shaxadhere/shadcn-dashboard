import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

type Props = {
  label: string;
  link: string;
  icon: any;
  count?: number;
  isSiderOpen: boolean;
};

const SiderItem = ({ label, icon, link, count, isSiderOpen }: Props) => {
  const { pathname } = useLocation();
  const splittedPath = pathname.split("/");
  const isActive = splittedPath.includes(link.split("/")[2]);
  return (
    <Link
      to={link}
      className={cn(
        "flex items-center  rounded-lg text-muted-foreground transition-all hover:text-primary",
        {
          "bg-muted text-primary": isActive,
          "px-1 py-2 justify-center": !isSiderOpen,
          "px-3 py-2 gap-3 justify-left": isSiderOpen,
        }
      )}
    >
      {icon}
      {isSiderOpen && label}
      {isSiderOpen && count && (
        <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
          {count}
        </Badge>
      )}
    </Link>
  );
};

export default SiderItem;
