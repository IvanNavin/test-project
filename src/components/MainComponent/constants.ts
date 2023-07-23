import { MainComponentType } from "./types.ts";

export const room = {
  adults: 0,
  children: 0,
};

export const initialValues: MainComponentType = {
  destination: '',
  stayDates: [null, null],
  roomAndGuests: [room],
  bin: '',
}
