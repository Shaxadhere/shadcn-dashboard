import { STORAGE } from "@/constants/storage";

const initialUserSlice = {
  user: JSON.parse(localStorage.getItem(STORAGE.USER)) || {},
};

export const CreateUserSlice = (set) => ({
  ...initialUserSlice,
  setUser: (payload) => {
    set((state) => ({
      ...state,
      user: payload,
    }));
  },
  setToken: (payload) => {
    set((state) => ({
      ...state,
      user: {
        ...state?.user,
        token: payload,
      },
    }));
  },
});
