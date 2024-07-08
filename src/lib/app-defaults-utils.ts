import { capitalize, singularize } from "./string-utils";

export const getPageName = (splitPath:any[]) => {
  let title = splitPath[splitPath.length - 1];
  if (!isNaN(Number(splitPath[splitPath.length - 1]))) {
    title = `${singularize(
      splitPath[splitPath.length - 2].replace("-", " ")
    )} Details`;
  }
  const pageName = `${capitalize(title)} | ${import.meta.env.VITE_APP_NAME}`;
  return pageName;
};
