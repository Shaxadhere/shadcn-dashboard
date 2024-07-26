import { BASE_URL } from "@/constants/api-base";

export const getRequestUrl = (url: string) => {
  return `${BASE_URL}${url}`;
};
