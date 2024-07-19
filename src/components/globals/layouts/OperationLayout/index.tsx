import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SubSider from "../Admin2Layout/SubSider";
import useBoolean from "@/hooks/useBoolean";
import { cn } from "@/lib/utils";

interface Props {
  subsiderMenu?: any;
  title?: string;
}

const OperationLayout: React.FC<Props> = ({ subsiderMenu, title }) => {
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
    <div className="flex">
      <SubSider
        subsiderMenu={subsiderMenu}
        title={title}
        isSubsiderOpen={isSubsiderOpen}
      />
      <div
        className={cn(`p-[30px]`, isSubsiderOpen && `w-[calc(100vw-250px)]`)}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default OperationLayout;
