import React from "react";
import { Outlet } from "react-router-dom";
import SubSider from "../Admin2Layout/SubSider";

interface Props {
  subsiderMenu?: any;
  title?: string;
}

const OperationLayout: React.FC<Props> = ({ subsiderMenu, title }) => {
  return (
    <div className="flex">
      <SubSider subsiderMenu={subsiderMenu}title={title} />
      <div className="absolute left-[250px] bg-[red] p-[30px]">
        <Outlet />
      </div>
    </div>
  );
};

export default OperationLayout;
