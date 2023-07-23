import { z } from "zod";
import { en } from "../../locales/en.ts";

export const schema = (t: (translate: keyof typeof en) => string) => (z.object({
  destination: z
    .string()
    .min(1, { message: t('cantBeBlank') }),
  stayDates: z
    .date()
    .nullable()
    .array()
    .refine((dates) => Array.isArray(dates)
        && dates.length === 2
        && dates.every((date) => date),
      {
      message: t('pleaseSelectValidDates'),
    }),
  roomAndGuests: z
    .array(
      z.object({
        adults: z.number(),
        children: z.number(),
      })
    )
    .refine((rooms) =>  Array.isArray(rooms)
      && rooms.every(({ adults, children}) => adults || children),
      {
        message: t('atLeastOneRoomAndBed'),
      }
    ),
  bin: z
    .string()
    .min(6, { message: t('cantBeBlankMin6') }),
}));
