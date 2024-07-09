import axios from "axios";
import { PostParams } from "./types";
import { STORAGE } from "@/constants/storage";
import { CONTENT_TYPES } from "@/constants/apiBase";
import { getRequestUrl } from "../url-utils";

const Post = async ({
  url,
  body,
  toastError,
  toastMessage,
  contentType = CONTENT_TYPES.JSON,
}: PostParams) => {
  try {
    const token = localStorage.getItem(STORAGE.TOKEN);
    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": contentType,
    };
    const response = await axios.post(getRequestUrl(url), body, { headers });
    if (toastMessage) {
      console.info("Data fetched successfully");
    }
    return response.data;
  } catch (error) {
    if (toastError) {
      console.error("Error: ", error.message);
    }
    throw error;
  }
};

export default Post;
