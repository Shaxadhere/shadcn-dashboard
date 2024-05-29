import { Badge } from "@/components/ui/badge";
import classNames from "classnames";
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
      className={classNames(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
        {
          "bg-muted text-primary": isActive,
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
