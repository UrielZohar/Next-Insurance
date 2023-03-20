const TIME_STRING_REGEX = /^(\d+)h(\d+)m$/;

const timeStringToMinutes = (timeString) => {
  const [, hours, minutes] = TIME_STRING_REGEX.exec(timeString);
  return (((1 * hours) * 60) + (1 * minutes));
}

module.exports = timeStringToMinutes;