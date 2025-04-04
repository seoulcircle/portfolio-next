export const formatDateWithDots = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}.${month}.${day}`;
};

export const formatDateCompact = (date: Date): string => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
};

export const formatTime = (date: Date, isTomorrow: boolean = false): string => {
  const hours = date.getHours().toString().padStart(2, "0");
  if (isTomorrow) {
    return `${hours}:00`;
  }
  const minutes = date.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
};

export const getTargetDate = (modalType: "today" | "tomorrow"): Date => {
  const now = new Date();
  if (modalType === "today") {
    return now;
  }
  return new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
};
