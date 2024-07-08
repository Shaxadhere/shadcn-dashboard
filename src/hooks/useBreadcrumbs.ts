import { getPageName } from "@/lib/app-defaults-utils";
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";

const useBreadcrumbs = () => {
  const { pathname } = useLocation();
  const splitPath = pathname.split("/");

  useEffect(() => {
    document.title = getPageName(splitPath);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const breadcrumbs = useMemo(() => {
    return splitPath
      .map((path, index) => ({
        title: path,
        link: splitPath.slice(0, index + 1).join("/"),
      }))
      .filter((path) => path.title !== "" && path.title !== "admin");
  }, [splitPath]);

  return breadcrumbs;
};

export default useBreadcrumbs;
