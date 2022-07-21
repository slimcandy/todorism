export const dateToStringDDMMYYYY = (dateValue: Date) => {
  const date = dateValue.getDate();
  const month = dateValue.getMonth() + 1; // take care of the month's number here ⚠️
  const year = dateValue.getFullYear();
  return `${date}.${month}.${year}`;
};
