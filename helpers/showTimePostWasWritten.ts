import { formatDistance } from "date-fns";

export const showTimePostWasWritten = (date: string) => formatDistance(new Date(), new Date(date));
