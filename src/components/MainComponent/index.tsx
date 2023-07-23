import { Button, Flex, Text } from "@mantine/core";
import { useMainComponent } from "./useMainComponent.ts";
import { Destination } from "./Destination";
import { StayDates } from "./StayDates";
import { Bin } from "./Bin";
import { RoomAndGuests } from "./RoomAndGuests";
import { SwitchLocale } from "./SwitchLocale";
import { useLocalStorage } from "@mantine/hooks";
import { useTranslate } from "../../hooks/useTranslate.ts";
import { ELocales } from "./types.ts";

export function MainComponent() {
  const { form, onSubmit } = useMainComponent();
  const [locale] = useLocalStorage({ key: 'language', defaultValue: ELocales.EN });
  const isRTL = locale === ELocales.HE;
  const { t } = useTranslate();
  
  return (
    <form onSubmit={onSubmit}>
      <Flex className={`
        max-w-[500px]
        lg:max-w-[1129px]
        mt-12
        pt-[28px]
        pr-[44px]
        pb-[18px]
        pl-12
        flex-col
        lg:flex-row
        justify-between
        lg:justify-start
        bg-white
        mx-auto
        rounded-xl
        shadow
        ${isRTL
          ? 'items-end lg:flex-row-reverse gap-x-4'
          : 'items-center'}
        `}>
        <Destination form={form} />
        <StayDates form={form} />
        <RoomAndGuests form={form} />
        <Bin form={form} />
        <Button
          className={`
            w-[114px]
            h-10
            ml-auto
            px-8
            py-3
            bg-red-600
            rounded-[100px]
            text-white
            hover:bg-red-600
            hover:brightness-125
            disabled:bg-opacity-50
            disabled:bg-stone-400
            disabled:text-white
            mt-4
            lg:-mt-[6px]
            ${isRTL ? 'lg:order-first self-center' : ''}
            `}
          disabled={!form.isValid()} // You can comment this line to check validation
          type="submit"
        >
          <Text className="text-white text-base font-medium leading-none">{t('search')}</Text>
        </Button>
      </Flex>
      <SwitchLocale />
    </form>
  );
}
