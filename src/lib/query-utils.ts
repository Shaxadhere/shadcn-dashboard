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

type QueryToObjectType = {
  query?: string;
  injectQuery?: any;
  defaultQuery?: any;
};

export const queryToObject = (options?: QueryToObjectType) => {
  const {
    query = window.location.search,
    injectQuery = {},
    defaultQuery = {},
  } = options;
  //getting query from url
  const urlSearchParams = new URLSearchParams(query);
  let params = Object.fromEntries(urlSearchParams.entries());

  //add default query on top of the query so
  //that default query can be overridden
  if (Object.keys(defaultQuery).length > 0) {
    params = { ...defaultQuery, ...params };
  }
  //add inject query on bottom of the query so
  //that inject query can override the query
  if (Object.keys(injectQuery).length > 0) {
    params = { ...params, ...injectQuery };
  }
  //convert filters to array of objects
  if (params.filters) {
    //i.e status=all,active,inactive&type=paid,unpaid
    let _filters = [];
    params.filters.split(",").forEach((filter) => {
      const filterArr = filter.split("=");
      if (!filterArr[1] || !filterArr[0]) return;
      _filters.push({
        [filterArr[0]]: filterArr[1],
      });
    });
    //@ts-ignore
    params.filters = _filters;
  }
  return params;
};

export const initListingQueryObject = (injectQuery?: any) => {
  return {
    pageNumber: 1,
    pageSize: 10,
    ...injectQuery,
  };
};