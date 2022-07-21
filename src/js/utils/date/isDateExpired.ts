export const isDateExpired = (date: Date | undefined) => {
  if(!date) return false;
  const today = new Date().valueOf();
  const checkingDate = new Date(date).valueOf();
  return today < checkingDate;
}
