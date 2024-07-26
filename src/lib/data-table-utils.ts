export const parseFilters = (input) => {
  if(!input) return [];
  const result = [];
  const pairs = input.split("&");

  pairs.forEach((pair) => {
    const [key, values] = pair.split("=");
    const valueArray = values.split(",");
    result.push({ id: key, value: valueArray });
  });

  return result;
};
