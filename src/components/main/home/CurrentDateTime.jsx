import { useState, useEffect } from "react";
function CurrentDateTime() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Function to format the date and time
  const formatDateTime = (dateTime) => {
    // Format date
    const dateOptions = {
      year: "numeric",
      month: "long",
      weekday: "long",
      day: "numeric",
    };
    const formattedDate = dateTime.toLocaleDateString(undefined, dateOptions);

    // Format time
    const timeOptions = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formattedTime = dateTime.toLocaleTimeString(undefined, timeOptions);

    return `${formattedDate} - ${formattedTime}`;
  };

  return {
    currentDateTime,
    formatDateTime,
  };
}

export default CurrentDateTime;
