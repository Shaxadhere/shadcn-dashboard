import { cn } from "@/lib/utils";
import SubsiderItem from "./SubsiderItem";

type Props = {
  subsiderMenu?: { label: string; link: string; icon: any }[];
};

const SubSiderContent = ({ subsiderMenu }: Props) => {
  return (
    <div className="flex-1">
      <nav className={cn("flex flex-col justify-start text-sm font-medium")}>
        {subsiderMenu?.map((menu, index) => (
          <SubsiderItem {...menu} key={index} />
        ))}
      </nav>
    </div>
  );
};

export default SubSiderContent;
