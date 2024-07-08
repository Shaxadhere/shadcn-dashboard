export const singularize = (word: string) => {
  if (word.endsWith("ies")) {
    return word.slice(0, -3) + "y";
  }
  if (word.endsWith("s")) {
    return word.slice(0, -1);
  }
  return word;
};

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};