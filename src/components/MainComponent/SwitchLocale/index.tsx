import { Switch } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { useEffect } from "react";
import { ELocales } from "../types.ts";

export function SwitchLocale() {
  const [value, setValue] = useLocalStorage({ key: 'language', defaultValue: ELocales.EN });
  
  useEffect(() => {
    document.documentElement.setAttribute('dir', value === ELocales.HE ? 'rtl' : 'ltr');
  }, [value]);
  
  return (
    <Switch
      className="h-[60px] fixed right-4 bottom-4"
      checked={value === ELocales.EN}
      onChange={({ currentTarget: { checked} }) => {
        setValue(checked ? ELocales.EN : ELocales.HE);
      }}
      size="md"
      onLabel="IW"
      offLabel="EN"
    />
  );
}
