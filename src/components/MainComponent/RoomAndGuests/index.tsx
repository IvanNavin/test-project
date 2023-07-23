import { Box, Flex, Popover, Rating, Text, TextInput } from "@mantine/core";
import { Bed } from "../../../assets/svg/Bed.tsx";
import { room } from "../constants.ts";
import { Room } from "./Room.tsx";
import { useRoomAndGuests } from "./useRoomAndGuests.ts";
import { UseFormReturnType } from "@mantine/form";
import { ELocales, MainComponentType } from "../types.ts";
import { useTranslate } from "../../../hooks/useTranslate.ts";
import { useLocalStorage } from "@mantine/hooks";

type Props = {
  form: UseFormReturnType<MainComponentType>;
}

export function RoomAndGuests({ form }: Props) {
  const {
    input,
    value,
    onChange,
    error,
    count,
    onDecrement,
    onIncrement,
  } = useRoomAndGuests(form);
  const { t } = useTranslate();
  const [locale] = useLocalStorage({ key: 'language', defaultValue: ELocales.EN });
  const isRTL = locale === ELocales.HE;

  const renderRooms = () => {
    return value?.map(({ adults, children }, idx) => (
      <Room
        key={idx}
        idx={idx}
        adults={adults}
        children={children}
        count={count}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
      />
    ));
  };

  return (
    <Popover trapFocus width={320}>
      <Popover.Target>
        <TextInput
          label={t('roomAndGuests')}
          value={input}
          error={error}
          readOnly
          variant="unstyled"
          placeholder={t('howManyRoomsDoYouNeed')}
          className="w-full lg:w-[252px] h-[60px] cursor-pointer self-center"
        />
      </Popover.Target>
      <Popover.Dropdown className="rounded-xl px-6 pt-5 pb-0 border-none shadow">
        <Box>
          <Flex className="justify-between mb-4 h-[28px] items-center">
            <Text className="text-neutral-950 text-base font-medium h-[22px] leading-[22px]">
              {t('rooms')}
            </Text>
            <Rating
              className={`gap-x-3 ${isRTL ? 'flex-row-reverse' : ''}`}
              value={value?.length || 0}
              count={3}
              emptySymbol={<Bed />}
              fullSymbol={<Bed fill="#FF0000" />}
              onChange={(val) => {
                if (val > value?.length) {
                  onChange([...value, room]);
                } else {
                  onChange(value.slice(0, -1));
                }
              }}
            />
          </Flex>
          {renderRooms()}
        </Box>
      </Popover.Dropdown>
    </Popover>
  );
}
