import { TOASTIFY_OPTIONS } from "@/types/types";
import { toast } from "react-toastify";

export default function ShowToastify(toastOptions: TOASTIFY_OPTIONS) {
  if (toastOptions.type === "default") {
    toast(toastOptions.message, toastOptions);
  }

  if (toastOptions.type === "success") {
    toast.success(toastOptions.message, toastOptions);
  }

  if (toastOptions.type === "info") {
    toast.info(toastOptions.message, toastOptions);
  }

  if (toastOptions.type === "warning") {
    toast.warning(toastOptions.message, toastOptions);
  }

  if (toastOptions.type === "error") {
    toast.error(toastOptions.message, toastOptions);
  }
}