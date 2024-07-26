import axios from "axios";
import { PatchParams } from "./types";
import { CONTENT_TYPES } from "@/constants/api-base";
import { getRequestUrl } from "../url-utils";

const Patch = async ({
  url,
  body,
  toastError,
  toastMessage,
  contentType = CONTENT_TYPES.JSON,
}: PatchParams) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": contentType,
    };
    const response = await axios.patch(getRequestUrl(url), body, { headers });
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
