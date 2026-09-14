import { ToastOptions } from "react-toastify";

export type TOASTIFY_OPTIONS = {
  message: string;
  type?: "default" | "success" | "info" | "warning" | "error";
  theme?: ToastOptions["theme"];
  position?: ToastOptions["position"];
  transition?: ToastOptions["transition"];
  autoClose?: ToastOptions["autoClose"];
};