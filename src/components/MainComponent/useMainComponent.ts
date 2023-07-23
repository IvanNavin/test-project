import { useForm, zodResolver } from "@mantine/form";
import { schema } from "./schema.ts";
import { initialValues } from "./constants.ts";
import { MainComponentType } from "./types.ts";
import { useTranslate } from "../../hooks/useTranslate.ts";

/**
 * Хук useMainComponent використовує хук useForm з Mantine для ініціалізації форми з валідацією та початковими значеннями.
 * Хук також оголошує функцію handleSubmit, яка обробляє відправку форми та виводить значення форми в консоль.
 * Повертає об'єкт з формою та функцією onSubmit.
 * */

// Custom hook for the main component
export function useMainComponent() {
  const { t } = useTranslate();
  const form = useForm<MainComponentType>({
    validate: zodResolver(schema(t)),
    initialValues,
  })
  
  // Handle form submission
  const handleSubmit = (values: MainComponentType) => {
    console.log("=>(useMainComponent.ts:17) values", values);
  }

  return {
    form,
    onSubmit: form.onSubmit(handleSubmit),
  };
}
