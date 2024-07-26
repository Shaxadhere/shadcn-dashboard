import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CreateUserSlice } from "./UserSlice";
import { CreateAppSlice } from "./AppSlice";
import { STORAGE } from "@/constants/storage";

//simple store
export const useBoundStore = create((set) => ({
  ...CreateUserSlice(set),
  ...CreateAppSlice(set),
}));

//persisted store
export const useBearStore = create(
  persist(
    (set) => ({
      //auth state
      isAuth: false,
      setIsAuth: (payload: Boolean) => set({ isAuth: payload }),
    }),
    {
      //using local storage to persist auth state
      name: STORAGE.AUTHENTICATION,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
