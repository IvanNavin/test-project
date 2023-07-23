import { TextInput } from "@mantine/core";
import { MainComponentType } from "../types.ts";
import { UseFormReturnType } from "@mantine/form";
import { useTranslate } from "../../../hooks/useTranslate.ts";

type Props = {
  form: UseFormReturnType<MainComponentType>;
}

export function Bin({ form }: Props) {
  const { t } = useTranslate();

  return (
    <TextInput
      className="w-full lg:w-[162px] h-[60px]"
      label={t('verifyYourBin')}
      placeholder={t('enterFirstSixDigits')}
      variant="unstyled"
      {...form.getInputProps('bin')}
    />
  );
}
