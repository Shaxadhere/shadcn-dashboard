import { useBoundStore } from "@/store";
import React from "react";

interface Props {
  percentage: number;
}

type BoundStoreType = { app: any };

const GlobalLoader: React.FC<Props> = () => {
  const { loading } = useBoundStore((state: BoundStoreType) => ({
    loading: state?.app?.loading,
  }));
  if (loading === 100 || loading === 0) return null;
  return (
    <div className={"loader w-screen h-[3px] z-10 absolute top-[0px]"}>
      <div
        className="h-[3px] bg-blue-500 transition-all duration-500 ease-in-out"
        style={{ width: `${loading}%` }}
      ></div>
    </div>
  );
};

export default GlobalLoader;
