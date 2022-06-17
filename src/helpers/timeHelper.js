const getTimeAgo = (newDate, oldDate) => {
  const milliseconds = new Date(newDate) - new Date(oldDate);
  const seconds = milliseconds / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  const years = newDate.getFullYear() - oldDate.getFullYear();
  const months = newDate.getMonth() - oldDate.getMonth() + years * 12;
  const weeks = months * 4.34524; // 1 month ~ 4.34524 weeks

  const timeAgoObj = {
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
  };

  return timeAgoObj;
};

const getTimeAgoString = (newDate, oldDate) => {
  const timeAgoObj = getTimeAgo(newDate, oldDate);
  console.log(timeAgoObj);

  const milestones = [
    "years",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ];

  for (let milestone of milestones) {
    const timeAgo = Math.floor(timeAgoObj[milestone]);
    if (timeAgo !== 0) {
      return `${timeAgo} ${milestone} ago`;
    }
  }
  return "";
};

export { getTimeAgo, getTimeAgoString };
