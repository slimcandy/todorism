import dayjs from "dayjs";

export const convertDateToDDMMYYYYWithDots = (date: Date | string) =>
  dayjs(date).format("DD.MM.YYYY");

export const getDateIntervalWithDots = (
  start: Date | string = "",
  end: Date | string = ""
) => {
  if (start && !end) {
    return `${convertDateToDDMMYYYYWithDots(start)}`;
  }
  if (!start && end) {
    return `${convertDateToDDMMYYYYWithDots(end)}`;
  }

  return `${convertDateToDDMMYYYYWithDots(
    start
  )}-${convertDateToDDMMYYYYWithDots(end)}`;
};

export const checkExpiredDate = (date: Date | string) =>
  dayjs().isAfter(dayjs(date), "day");
