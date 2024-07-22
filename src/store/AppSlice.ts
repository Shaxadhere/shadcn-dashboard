import { STORAGE } from "@/constants/storage";

const initialUserSlice = {
  app: JSON.parse(localStorage.getItem(STORAGE.APP)) || {
    loading: 0,
  },
};

export const CreateAppSlice = (set: any) => ({
  ...initialUserSlice,
  setLoading: (payload: Number) => {
    set((state: any) => ({
      ...state,
      app: {
        ...state?.app,
        loading: payload,
      },
    }));
  },
});
