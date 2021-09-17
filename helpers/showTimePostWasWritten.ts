import { formatDistance } from "date-fns";
import { ru } from "date-fns/locale";

export const showTimePostWasWritten = (date: string) => formatDistance(new Date(), new Date(date), { locale: ru });
