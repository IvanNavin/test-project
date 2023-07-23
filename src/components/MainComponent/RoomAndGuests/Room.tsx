import { Text, Flex, Box, Divider } from "@mantine/core";
import { Counter } from "./Counter.tsx";
import { useTranslate } from "../../../hooks/useTranslate.ts";

type Props = {
  idx: number;
  adults: number;
  children: number;
  count: number;
  onDecrement: (idx: number, field: 'adults' | 'children') => void;
  onIncrement: (idx: number, field: 'adults' | 'children') => void;
}

export function Room({ idx, adults, children, count, onDecrement, onIncrement }: Props) {
  const { t } = useTranslate();
  
  const handleDecrement = (field: "adults" | "children") => {
    if ((field === "adults" && adults > 0) || (field === "children" && children > 0)) {
      onDecrement(idx, field);
    }
  };
  
  const handleIncrement = (field: "adults" | "children") => {
    if ((field === "adults" && count < 9) || (field === "children" && count < 9)) {
      onIncrement(idx, field);
    }
  };

  return (
    <>
      <Divider className="mb-6 border-t-gray-200"/>
      <Text className="mb-4 text-neutral-950 text-[13px] font-normal leading-[17px]">{`Room ${idx + 1}`}</Text>
      <Flex className="justify-between mb-6">
        <Box>
          <Text className="text-neutral-950 text-base font-medium leading-snug mb-1">{t('adults')}</Text>
          <Text className="text-stone-400 text-sm font-normal leading-[18px]">{t('agesOrAbove')}</Text>
        </Box>
        <Counter
          disabledDecrement={adults <= 0}
          onDecrement={() => handleDecrement("adults")}
          count={adults}
          disabledIncrement={count >= 9}
          onIncrement={() => handleIncrement("adults")}
        />
      </Flex>
      <Flex className="justify-between mb-[24px]">
        <Box>
          <Text className="text-neutral-950 text-base font-medium leading-snug mb-1">{t('children')}</Text>
          <Text className="text-stone-400 text-sm font-normal leading-[18px]">{t('agesOrAbove')}</Text>
        </Box>
        <Counter
          disabledDecrement={children <= 0}
          onDecrement={() => handleDecrement("children")}
          count={children}
          disabledIncrement={count >= 9}
          onIncrement={() => handleIncrement("children")}
        />
      </Flex>
    </>
  );
}
