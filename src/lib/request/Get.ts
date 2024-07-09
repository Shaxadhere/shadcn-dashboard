import axios from "axios";
import { GetParams } from "./types";
import { STORAGE } from "@/constants/storage";
import { CONTENT_TYPES } from "@/constants/apiBase";
import { getRequestUrl } from "../url-utils";

const Get = async ({ url, query, toastError, toastMessage }: GetParams) => {
  try {
    const token = localStorage.getItem(STORAGE.TOKEN);
    const response = await axios.get(getRequestUrl(url), {
      headers: {
        contentType: CONTENT_TYPES.JSON,
        Authorization: token ? `Bearer ${token}` : "",
      },
      params: query,
    });
    if (toastMessage) {
      console.log("Data fetched successfully");
    }
    return response.data;
  } catch (error) {
    if (toastError) {
      console.log("Error: ", error.message);
    }
    throw error;
  }
};

export default Get;
