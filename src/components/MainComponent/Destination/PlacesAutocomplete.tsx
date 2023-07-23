import { Autocomplete, Loader } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { ELocales, MainComponentType } from "../types.ts";
import { useDestination } from "./useDestination.ts";
import { useTranslate } from "../../../hooks/useTranslate.ts";
import { useLocalStorage } from "@mantine/hooks";

type Props = {
  form: UseFormReturnType<MainComponentType>;
}

export function PlacesAutocomplete({ form }: Props) {
  const {
    loading,
    list,
    setValue,
    onChange,
    inputProps,
  } = useDestination(form);
  const { t } = useTranslate();
  const [locale] = useLocalStorage({ key: 'language', defaultValue: ELocales.EN });
  const isRTL = locale === ELocales.HE;
  
  return (
    <Autocomplete
      label={t('destination')}
      placeholder={t('whereCanWeTakeYou')}
      {...{
        [isRTL ? 'icon' : 'rightSection']: loading
            ? <Loader />
            : <div />
      }}
      data={list || []}
      variant="unstyled"
      fz={16}
      className="w-full lg:w-[222px] h-[60px]"
      onChange={(value) => {
        setValue(value);
        onChange(value);
      }}
      {...inputProps}
    />
  );
}
