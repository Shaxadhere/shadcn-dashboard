import { useMutation, useQueryClient } from "react-query";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error("An error occurred while logging in");
      }
      return response.json();
    },
    onSuccess: (data) => {
      queryClient.setQueryData("me", data);
    },
  });
};
