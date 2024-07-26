import axios from "axios";
import { DeleteParams } from "./types";
import { getRequestUrl } from "../url-utils";
import { toast } from "sonner";

const Delete = async ({
  url,
  toastError,
  toastMessage,
  successAction,
  errorAction,
}: DeleteParams) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
    };
    const response = await axios.delete(getRequestUrl(url), { headers });
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

export default Delete;
