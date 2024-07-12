import { cn } from "@/lib/utils";
import SubSiderContent from "./SubSiderContent";
import useBoolean from "@/hooks/useBoolean";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type Props = {
  subsiderMenu?: { label: string; link: string; icon: any }[];
  title?: string;
};

const SubSider = ({ subsiderMenu, title }: Props) => {
  const { pathname } = useLocation();
  const {
    toggle: toggleSubsider,
    setTrue: openSubsider,
    value: isSubsiderOpen,
  } = useBoolean(false);

  useEffect(() => {
    if (!isSubsiderOpen) {
      openSubsider();
    }
  }, [pathname]);
  return (
    <div
      className={cn(
        `hidden border-r bg-muted/40 md:block h-[100vh] ease-out duration-300 w-[250px]`,
        !isSubsiderOpen && `w-[0px]`
      )}
    >
      <div className="flex px-5 py-3 h-full max-h-screen flex-col gap-2">
        <h4 className="font-semibold">{title}</h4>
        {isSubsiderOpen && <SubSiderContent subsiderMenu={subsiderMenu} />}
      </div>
    </div>
  );
};

export default SubSider;
