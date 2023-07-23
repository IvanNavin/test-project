import { RoomAndGuestType } from "../types.ts";
import { en } from "../../../locales/en.ts";

/**
 * Функція обчислює текстовий вивід для кількості кімнат та гостей.
 * Приймає масив об'єктів `rooms`, який містить інформацію про кімнати та гостей,
 * та функцію `t`, яка використовується для перекладу тексту на потрібну мову.
 * */

// Function to calculate input value based on room and guest count
export const calculateInputValue = (rooms: RoomAndGuestType[], t: (translate: keyof typeof en) => string) => {
  // Calculation of the total number of rooms, adults, and children
  const roomsLength = rooms.length;
  const adultsCount = rooms.reduce((acc, { adults }) => acc + adults, 0);
  const childrenCount = rooms.reduce((acc, { children }) => acc + children, 0);
  
  // Define localized text variables based on quantity values
  const roomsText = t("s");
  const adultsText = t("s");
  const childrenText = t(`children`);
  
  // Formation of text output depending on the number of rooms and guests
  const roomLabel = t('room') + (roomsLength > 1 ? roomsText : '');
  const adultsLabel = adultsCount ? `, ${adultsCount} ${t('adult')}${adultsText}` : '';
  const childrenLabel = childrenCount ? `, ${childrenCount} ${childrenText}` : '';
  
  return (adultsCount || childrenCount) ? `${roomsLength} ${roomLabel}${adultsLabel}${childrenLabel}` : "";
};
