import { Flex, ActionIcon, Text } from "@mantine/core";
import { Decrement } from "../../../assets/svg/Decrement.tsx";
import { Increment } from "../../../assets/svg/Increment.tsx";

type Props = {
  disabledDecrement: boolean;
  onDecrement: () => void;
  count: number;
  disabledIncrement: boolean;
  onIncrement: () => void;
};

export function Counter({ disabledDecrement, onDecrement, count, disabledIncrement, onIncrement }: Props) {
  return (
    <Flex className="gap-x-[13px] items-center">
      <ActionIcon className="!bg-transparent border-none" disabled={disabledDecrement} onClick={onDecrement}>
        <Decrement fill={disabledDecrement ? "#EBEBEB" : "#96918B"} />
      </ActionIcon>
      <Text className="text-center text-neutral-950 text-base font-medium leading-snug">{count}</Text>
      <ActionIcon className="!bg-transparent border-none" disabled={disabledIncrement} onClick={onIncrement}>
        <Increment fill={disabledIncrement ? "#EBEBEB" : "#96918B"} />
      </ActionIcon>
    </Flex>
  );
}
