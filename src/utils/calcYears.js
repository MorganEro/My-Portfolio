function calculateYears(startYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

export default calculateYears;
