import { UseFormReturnType } from "@mantine/form";
import { ELocales, MainComponentType } from "../types.ts";
import { useEffect, useState } from "react";
import usePlacesAutocomplete from "use-places-autocomplete";

type ListItemType = {
  label: string,
  value: string,
}

/**
 * Хук useDestination приймає форму form і використовує хук usePlacesAutocomplete з пакету "use-places-autocomplete".
 * Цей хук надає можливість вибирати місця за допомогою автозаповнення.
 * Хук також зберігає список підказок та вибране значення місця.
 * Повертає об'єкт зі списком підказок, значеннями місця та функцією для оновлення вибраного значення.
 * */

// Custom hook for handling destination input
export function useDestination(form: UseFormReturnType<MainComponentType>) {
  const [list, setList] = useState<ListItemType[]>([]);
  const { onChange, ...inputProps} = form.getInputProps('destination') as { onChange: (arg: string) => void};
  const {
    setValue,
    suggestions: {
      loading,
      data,
    }
  } = usePlacesAutocomplete({
    requestOptions: {
      language: ELocales.EN,
    },
    debounce: 800,
  });

  // Update suggestion list when data comes
  useEffect(() => {
    if (data.length) {
      const result = data?.map(
        ({ description }) => ({ label: description, value: description })
      );
      
      setList(result);
    }
  }, [data]);
  
  return {
    loading,
    list,
    setValue,
    onChange,
    inputProps,
  };
}
