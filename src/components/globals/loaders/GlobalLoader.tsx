import React from "react";

interface Props {
  percentage: number;
}

const GlobalLoader: React.FC<Props> = ({ percentage = 0 }) => {
  if (percentage === 100 || percentage === 0) return null;
  return (
    <div className={"loader w-screen h-[3px] z-10 absolute top-[0px]"}>
      <div
        className="h-[3px] bg-blue-500 transition-all duration-500 ease-in-out"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default GlobalLoader;
