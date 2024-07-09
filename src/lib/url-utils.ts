import { BASE_URL } from "@/constants/apiBase";

export const getRequestUrl = (url: string) => {
  return `${BASE_URL}${url}`;
};
