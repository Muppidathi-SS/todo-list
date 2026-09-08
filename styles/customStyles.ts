import { SxProps, Theme } from "@mui/material";

export const customSelectStyles: SxProps<Theme> = {
  fontFamily: "var(--font-poppins)",
  borderRadius: "12px",
  color: "#1f2937",

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#e5e7eb",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#d1d5db",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#d1d5db",
    borderWidth: "1px",
  },

  "& .MuiSelect-icon": {
    color: "#6b7280",
    transition: "0.2s",
  },
};

export const customMenuStyles: SxProps<Theme> = {
  "& .MuiPaper-root": {
    borderRadius: "12px",
    padding: 0,
    mt: 1,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
    "& .MuiList-root": {
      padding: 0,
    },
    "& .MuiMenuItem-root": {
      fontFamily: "var(--font-poppins)",
    },
  },
};

export const customSwitchStyles: SxProps<Theme> = {
  width: 52,
  height: 31,
  padding: 0,

  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: "2px",
    transition: "transform 200ms ease",

    // OFF state
    "& + .MuiSwitch-track": {
      backgroundColor: "#D1D5DB",
      opacity: 1,
    },

    // ON state
    "&.Mui-checked": {
      transform: "translateX(20px)",
      color: "#FFFFFF",

      "& + .MuiSwitch-track": {
        backgroundColor: "black",
        opacity: 1,
      },
    },

    // Disabled state
    "&.Mui-disabled": {
      color: "#9CA3AF",

      "& + .MuiSwitch-track": {
        opacity: 0.4,
      },
    },
  },

  // Circle
  "& .MuiSwitch-thumb": {
    width: 28,
    height: 28,
    boxSizing: "border-box",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.25)",
  },

  // Background/track
  "& .MuiSwitch-track": {
    borderRadius: "16px",
    backgroundColor: "#39393D",
    opacity: 1,
    transition: "background-color 200ms ease",
  },
};
