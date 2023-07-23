import { useEffect, useState } from "react";
import { MainComponentType, RoomAndGuestType } from "../types.ts";
import { calculateInputValue } from "./calculateInputValue.tsx";
import { UseFormReturnType } from "@mantine/form";
import { useTranslate } from "../../../hooks/useTranslate.ts";
import { useLocalStorage } from "@mantine/hooks";

type PropsType = {
  value: RoomAndGuestType[];
  onChange: (val: RoomAndGuestType[]) => void;
  error?: string;
};

/**
 * Функція updateGuestCount приймає індекс кімнати (idx), тип гостя (field) та операцію (operation - "increment" або "decrement").
 * Вона змінює кількість гостей в кімнаті в залежності від операції та обмежень кількості гостей.
 * Функція також оновлює значення форми, викликаючи функцію onChange з новим значенням кімнат та гостей.
 *
 * Хук useRoomAndGuests обчислює загальну кількість гостей і текстовий інпут, який представляє вибрану кількість кімнат та гостей.
 * Вона також визначає функції onIncrement та onDecrement, які дозволяють збільшувати та зменшувати кількість гостей у кожній кімнаті.
 * Повертає об'єкт з текстовим виводом кімнат та гостей, значеннями кімнат та гостей, функцією для їх зміни.
 * */

// Custom hook for handling room and guests input
export function useRoomAndGuests(form: UseFormReturnType<MainComponentType>) {
  const { value, onChange, error } = form.getInputProps('roomAndGuests') as PropsType;
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  const [locale] = useLocalStorage({ key: 'language', defaultValue: 'en' });
  const { t } = useTranslate();
  
  // Update guest count when increment or decrement is triggered
  const updateGuestCount = (idx: number, field: "adults" | "children", operation: "increment" | "decrement") => {
    const newValue = value.map((room, roomIdx) => {
      if (idx === roomIdx && (operation === "increment" ? room[field] < 9 : room[field] > 0)) {
        return {
          ...room,
          [field]: operation === "increment" ? room[field] + 1 : room[field] - 1,
        };
      }

      return room;
    });

    onChange(newValue);
  }

  useEffect(() => {
    if (form.values?.roomAndGuests?.length > 0) {
      setCount(
        form.values.roomAndGuests.reduce((acc, { adults, children }) => acc + adults + children, 0)
      );
      setInput(calculateInputValue(form.values.roomAndGuests,  t));
    }
  }, [form.values.roomAndGuests, locale]);
  
  return {
    input,
    value,
    onChange,
    error,
    count,
    onIncrement: (idx: number, field: "adults" | "children") => updateGuestCount(idx, field, "increment"),
    onDecrement: (idx: number, field: "adults" | "children") => updateGuestCount(idx, field, "decrement"),
  };
}
