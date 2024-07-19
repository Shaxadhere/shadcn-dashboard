import { cn } from "@/lib/utils";
import SubSiderContent from "./SubSiderContent";

type Props = {
  subsiderMenu?: { label: string; link: string; icon: any }[];
  title?: string;
  isSubsiderOpen?: boolean;
};

const SubSider = ({ subsiderMenu, title, isSubsiderOpen }: Props) => {
  return (
    <div
      className={cn(
        `hidden border-r bg-muted/40 md:block h-[calc(100vh-60px)] ease-out duration-300 w-[250px] overflow-y-auto`,
        !isSubsiderOpen && `w-[0px]`
      )}
    >
      <div className="flex px-3 py-3 h-full flex-col gap-2">
        <h4 className="font-semibold">{title}</h4>
        {isSubsiderOpen && <SubSiderContent subsiderMenu={subsiderMenu} />}
      </div>
    </div>
  );
};

export default SubSider;
