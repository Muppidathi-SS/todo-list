const styles = {
  completedStyles: "bg-green-100 text-green-700",
  ongoingStyles: "bg-[#ffebd4dd] text-[#ff8800dd]",
  pendingStyles: "bg-[#fff0f0dd] text-[#ff0000dd]",
  highStyles: "bg-[#d2bdff] text-[#4c00e4]",
  lowStyles: "bg-[#d6d6d6] text-[#686868]",
  mediumStyles: "bg-[#ffe0ef] text-[#ff18cd]",
};

export const primaryRowBorder = "border-r border-b";

export const secondaryRowBorder = "border-b";

export const getStatusColor = (status: string) => {
  return status === "Completed"
    ? styles.completedStyles
    : status === "Pending"
      ? styles.pendingStyles
      : styles.ongoingStyles;
};

export const getPriorityColor = (priority: string) => {
  return priority === "High"
    ? styles.highStyles
    : priority === "Low"
      ? styles.lowStyles
      : styles.mediumStyles;
};
