import axios from "axios";
import { GetParams } from "./types";
import { STORAGE } from "@/constants/storage";
import { CONTENT_TYPES } from "@/constants/api-base";
import { getRequestUrl } from "../url-utils";
import { toast } from "sonner";

const Get = async ({
  url,
  query,
  toastError,
  toastMessage,
  successAction,
  errorAction,
}: GetParams) => {
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

export default Get;
