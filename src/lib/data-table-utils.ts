export const parseFilters = (input) => {
  const result = [];
  const pairs = input.split("&");

  pairs.forEach((pair) => {
    const [key, values] = pair.split("=");
    const valueArray = values.split(",");
    result.push({ id: key, value: valueArray });
  });

  return result;
};
