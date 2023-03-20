const queryParamsObjectToString = object => {
  let str = '';
  for (const [key, value] of Object.entries(object)) {
    if (value !== null && value !== undefined) {
      str += `${key}=${value}&`;
    }
  }
  return str;
}

const getAll50LastYears = () => {
  const years = [];
  const currentYear = new Date().getFullYear();
  for (let num = 0; num < 49; num++) {
    years.push(currentYear - num);
  }
  return years;
}

export {
  queryParamsObjectToString,
  getAll50LastYears
};