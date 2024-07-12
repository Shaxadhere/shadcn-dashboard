import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

type Props = {
  label: string;
  link: string;
  icon: any;
};

const SubsiderItem = ({ label, icon, link }: Props) => {
  const { pathname } = useLocation();
  const isActive = pathname === link;
  return (
    <Link
      to={link}
      className={cn(
        "rounded-lg gap-3 text-muted-foreground transition-all hover:text-primary text-sm p-2 flex items-center",
        {
          "bg-muted text-primary": isActive,
        }
      )}
    >
      {icon}
      <div className="text-sm">{label}</div>
    </Link>
  );
};

export default SubsiderItem;
