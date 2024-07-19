type ObjectToQueryType = {
  params: Record<string, any>;
  useArray?: boolean;
};

export const objectToQuery = ({ params, useArray }: ObjectToQueryType) => {
  const paramsArr = [];
  Object.keys(params).forEach((key) => {
    if (Array.isArray(params[key])) {
      params[key].forEach((paramsVal) => {
        if (useArray) {
          paramsArr.push(`${key}[]=${paramsVal}`);
        } else {
          paramsArr.push(`${key}=${paramsVal}`);
        }
      });
    } else {
      if (
        params[key] !== "" &&
        params[key] !== null &&
        params[key] !== undefined
      ) {
        paramsArr.push(`${key}=${params[key]}`);
      }
    }
  });
  return paramsArr.join("&");
};
