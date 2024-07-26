import axios from "axios";
import { PatchParams } from "./types";
import { CONTENT_TYPES } from "@/constants/api-base";
import { getRequestUrl } from "../url-utils";
import { toast } from "sonner";

const Patch = async ({
  url,
  body,
  toastError,
  toastMessage,
  contentType = CONTENT_TYPES.JSON,
  successAction,
  errorAction,
}: PatchParams) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": contentType,
    };
    const response = await axios.patch(getRequestUrl(url), body, { headers });
    if (toastMessage) {
      const message = "your message"; //extract message from response
      toast("Great!", {
        description: message,
        important: true,
        action: successAction,
      });
      console.info("Data fetched successfully");
    }
    return response.data;
  } catch (error) {
    if (toastError) {
      const message = "your error"; //extract error from response
      toast("Error!", {
        description: message,
        important: true,
        action: errorAction,
      });
      console.warn("Error: ", error.message);
    }
    throw error;
  }
};
