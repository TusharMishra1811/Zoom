export const getCurrentTime = () => {
  const currTime = new Date();
  const timeString = currTime.toLocaleTimeString("en-US", {
    timeStyle: "short",
    hour12: true,
  });
  return timeString;
};
export const getCurrentDate = () => {
  const currDate = new Date();
  const dateString = currDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return dateString;
};
