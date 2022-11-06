import dayjs from "dayjs";

export const convertDateToDDMMYYYYWithDots = (date: Date | string) =>
  dayjs(date).format("DD.MM.YYYY");

export const checkExpiredDate = (date: Date | string) =>
  dayjs().isAfter(dayjs(date), "day");
