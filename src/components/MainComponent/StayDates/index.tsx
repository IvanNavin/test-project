import 'dayjs/locale/en';
import 'dayjs/locale/he';
import { DatePickerInput, DatesProvider } from "@mantine/dates";
import { ELocales, MainComponentType } from "../types.ts";
import { UseFormReturnType } from "@mantine/form";
import { useTranslate } from "../../../hooks/useTranslate.ts";
import { useLocalStorage } from "@mantine/hooks";

type Props = {
  form: UseFormReturnType<MainComponentType>;
}

export function StayDates({ form }: Props) {
  const [locale] = useLocalStorage({ key: 'language', defaultValue: ELocales.EN });
  const { t } = useTranslate();

  return (
    <DatesProvider settings={{ locale }}>
      <DatePickerInput
        type="range"
        label={t('stayDates')}
        variant="unstyled"
        minDate={new Date()}
        locale={locale}
        clearable
        fz={16}
        valueFormat="MMM DD"
        className="w-full lg:w-[242px] h-[60px] text-black text-base font-semibold leading-normal"
        placeholder={t('whatDatesShouldWeBlock')}
        {...form.getInputProps('stayDates')}
        sx={{
          '.mantine-Input-wrapper': {
            display: 'flex',
            height: '24px',
          },
        }}
      />
    </DatesProvider>
  );
}
