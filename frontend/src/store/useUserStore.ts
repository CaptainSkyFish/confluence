import { create } from "zustand";
import getCurrentUser from "../api/getCurrentUser";

type User = {
  id: string;
  username: string;
  bio: string;
};

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  getUser: () => Promise<void>;
  clearUser: () => void;
};

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  getUser: async () => {
    try {
      const user = await getCurrentUser();
      set({ user });
    } catch (e) {
      console.log(e);
      set({ user: null });
    }
  },
}));

export default useUserStore;
