import { create } from "zustand";
import { axiosInstance } from "../assets/library/axios";
import toast, { ToastBar } from "react-hot-toast";

export const useAuth = create((set) => ({
  authUser: null,
  isSigningIn: false,
  isLoggingIn: false,
  isChekingAuth: true,
  signUp: async (data) => {
    set({ isSigningIn: true });

    try {
      const ans = await axiosInstance.post("", data);
      set({ authUser: ans.data });
      toast.success("Compte cree avec success");
    } catch (error) {
      toast.error("Erreur, veillez reessayer");
    } finally {
      set({ isSigningIn: false });
    }
  },
}));
