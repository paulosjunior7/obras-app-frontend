import { format, parseISO, addDays, addHours } from "date-fns";

export function convertDateToISOWithTimezone(date: string): string {
  const parsedDate = parseISO(date);
  const dateWithTimezone = addHours(parsedDate, -3);
  const adjustedDate = addDays(dateWithTimezone, 1);
  const formattedDate = format(adjustedDate, "yyyy-MM-dd'T'HH:mm:ssxxx");
  return formattedDate;
}
