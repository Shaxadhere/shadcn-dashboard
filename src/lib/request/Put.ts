import axios from "axios";
import { PutParams } from "./types";
import { CONTENT_TYPES } from "@/constants/apiBase";
import { getRequestUrl } from "../url-utils";

const Put = async ({
  url,
  body,
  toastError,
  toastMessage,
  contentType = CONTENT_TYPES.JSON,
}: PutParams) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": contentType,
    };
    const response = await axios.put(getRequestUrl(url), body, { headers });
    if (toastMessage) {
      console.info("Data updated successfully");
    }
    return response.data;
  } catch (error) {
    if (toastError) {
      console.error("Error: ", error.message);
    }
    throw error;
  }
};
