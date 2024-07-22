import Get from "@/lib/request/Get";
import Post from "@/lib/request/Post";
import { useMutation, useQuery } from "react-query";

export const useOrders = () => {
  return useQuery({
    queryKey: "orders",
    queryFn: async () => {
      const data = await Get({
        url: "/orders",
        toastMessage: true,
      });
      return data;
    },
  });
};

export const useCreateOrder = () => {
  return useMutation({
    mutationFn: async (body: any) => {
      const data = await Post({
        url: "/orders",
        body,
        toastMessage: true,
      });

      return data;
    },
  });
};
