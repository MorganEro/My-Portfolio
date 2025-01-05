function calculateYears(startDate) {
  const [startMonth, startYear] = startDate.split('/').map(Number);

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  let yearsDifference = currentYear - startYear;

  if (currentMonth < startMonth) {
    yearsDifference--;
  }

  return yearsDifference;
}

export default calculateYears;
