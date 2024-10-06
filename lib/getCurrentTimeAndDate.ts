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
export const getCurrentDateForUpcomingMeeting = () => {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();

  return `${day}/${month}/${year}`;
};
