const timeStringToMinutes = require('../utils/times');

const minYearFilter = minYear => ({released}) => released >= minYear;
const maxYearFilter = maxYear => ({released}) => released <= maxYear;
const minRatingFilter = minRating => ({rating}) => rating >= minRating;
const maxRatingFilter = maxRating => ({rating}) => rating <= maxRating;
const titleFilter = text => ({title}) => title.toLowerCase().includes(text);
const minRunTimeFilter = minRunTimeMinutes => ({runtime}) => {
  return timeStringToMinutes(runtime) > minRunTimeMinutes;
};
const maxRunTimeFilter = maxRunTimeMinutes => ({runtime}) => {
  return timeStringToMinutes(runtime) < maxRunTimeMinutes;
};
const alwaysTrue = () => true;

module.exports = {
  minYearFilter,
  maxYearFilter,
  minRatingFilter,
  maxRatingFilter,
  titleFilter,
  minRunTimeFilter,
  maxRunTimeFilter,
  alwaysTrue,
};