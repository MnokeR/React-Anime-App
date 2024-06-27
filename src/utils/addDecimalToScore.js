export const addDecimalToScore = (num) => {
  const numberStr = String(num);
  const numberWtihDecimal = numberStr.slice(0, 1) + "." + numberStr.slice(1);

  return parseFloat(numberWtihDecimal);
};
