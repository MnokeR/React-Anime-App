export const yearsFromCurrent = (numYears) => {
  const date = new Date();
  const currentYear = date.getFullYear();
  const years = currentYear + numYears;

  if (numYears > 0) {
    let totalYears = [];
    for (let i = currentYear; i < years; i++) {
      totalYears.push(i);
    }
    return totalYears;
  } else if (numYears < 0) {
    let totalYears = [];
    for (let i = currentYear; i > years; i--) {
      totalYears.push(i);
    }
    return totalYears;
  } else {
    return totalYears.push(currentYear);
  }
};
