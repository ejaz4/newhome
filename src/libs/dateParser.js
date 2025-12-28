export const getRelativeDate = (dateObj) => {
  const now = new Date();
  const diffInMs = now - dateObj;
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

  // 1. Handle "Today" specific logic
  const isSameDay = dateObj.toDateString() === now.toDateString();
  if (isSameDay) {
    return "today";
  }

  // 2. Handle "Yesterday" (Optional)
  if (diffInDays === 1) {
    return "yesterday";
  }

  // 3. Handle Relative Time (Weeks, Months, etc.)
  const rtf = new Intl.RelativeTimeFormat(navigator.language, {
    numeric: "auto",
  });

  // Calculate weeks
  if (diffInDays >= 7 && diffInDays < 30) {
    const weeks = Math.floor(diffInDays / 7);
    return rtf.format(-weeks, "week");
  }

  // Calculate months
  if (diffInDays >= 30 && diffInDays < 365) {
    const months = Math.floor(diffInDays / 30);
    return rtf.format(-months, "month");
  }

  // Default to days if less than a week but not today
  return rtf.format(-diffInDays, "day");
};
