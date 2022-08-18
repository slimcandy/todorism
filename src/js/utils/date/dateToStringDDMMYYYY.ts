export const dateToStringDDMMYYYY = (dateValue: Date) => {
  let date: string = dateValue.getDate().toString();
  let month: string = (dateValue.getMonth() + 1).toString();
  const year = dateValue.getFullYear();
  if (date.length < 2) date = `0${date}`;
  if (month.length < 2) month = `0${month}`;
  return `${date}.${month}.${year}`;
};
