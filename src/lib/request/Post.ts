import axios from "axios";
import { PostParams } from "./types";
import { STORAGE } from "@/constants/storage";
import { CONTENT_TYPES } from "@/constants/api-base";
import { getRequestUrl } from "../url-utils";
import { toast } from "sonner";

const Post = async ({
  url,
  body,
  toastError,
  toastMessage,
  contentType = CONTENT_TYPES.JSON,
  successAction,
  errorAction,
}: PostParams) => {
  try {
    const token = localStorage.getItem(STORAGE.TOKEN);
    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": contentType,
    };
    const response = await axios.post(getRequestUrl(url), body, { headers });
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

export default Post;
