/**
 * Formats a date string relative to the current time.
 *
 * @param {string} dateString - The date string to be formatted.
 * @returns {string} - The formatted date string.
 */
const formatDate = (dateString) => {
  // Create Date objects from the input date string and the current time
  const createdAt = new Date(dateString);
  const now = new Date();

  // Calculate the difference between the two dates in minutes
  const diffMinutes = Math.floor((now - createdAt) / (1000 * 60));

  // If the difference is less than 1 minute
  if (diffMinutes < 1) return "less than a minute ago";

  // If the difference is less than 1 hour
  if (diffMinutes < 60)
    return `${diffMinutes} ${diffMinutes === 1 ? "minute" : "minutes"} ago`;

  // If the difference is less than 1 day
  if (diffMinutes < 1440)
    return `${Math.floor(diffMinutes / 60)} ${
      Math.floor(diffMinutes / 60) === 1 ? "hour" : "hours"
    } ago`;

  // If the difference is 1 day or more
  const options = {
    weekday: "long", // Full weekday name
    year: "numeric", // Year
    month: "long", // Full month
    day: "numeric", // Day
    hour: "numeric", // Hour
    minute: "numeric", // Minute
    hour12: true, // 12-hour format
  };

  // Returns the full date and time in a readable format
  return createdAt.toLocaleString("en-US", options);
};

export default formatDate;
