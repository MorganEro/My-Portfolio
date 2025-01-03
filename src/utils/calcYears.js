function calculateYears(startDate) {
  const [startMonth, startYear] = startDate.split('/').map(Number);
  const startDateObj = new Date(startYear, startMonth - 1); // Month is 0-indexed in JavaScript Date

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed in JavaScript Date

  let yearsDifference = currentYear - startYear;

  // Adjust the difference if the current month is before the start month
  if (currentMonth < startMonth) {
    yearsDifference--;
  }

  return yearsDifference;
}

export default calculateYears;
