import axios from "axios";
import { DeleteParams } from "./types";
import { getRequestUrl } from "../url-utils";

const Delete = async ({ url, toastError, toastMessage }: DeleteParams) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: token ? `Bearer ${token}` : "",
    };
    const response = await axios.delete(getRequestUrl(url), { headers });
    if (toastMessage) {
      console.info("Data deleted successfully");
    }
    return response.data;
  } catch (error) {
    if (toastError) {
      console.error("Error: ", error.message);
    }
    throw error;
  }
};

export default Delete;
