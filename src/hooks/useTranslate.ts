import { useLocalStorage } from "@mantine/hooks";
import { locales } from "../locales";
import { en } from "../locales/en.ts";
import { ELocales } from "../components/MainComponent/types.ts";

export function useTranslate() {
  const [value] = useLocalStorage({ key: 'language', defaultValue: ELocales.EN });
  
  const t = (translate: keyof typeof en) => locales[value as ELocales][translate] || translate;
  
  return { t };
}
