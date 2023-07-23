export type RoomAndGuestType = {
  adults: number,
  children: number,
}

export type MainComponentType = {
  destination: string,
  stayDates: [Date | null, Date | null],
  roomAndGuests: RoomAndGuestType[],
  bin: string,
}

export enum ELocales {
  EN = 'en',
  HE = 'he',
}
