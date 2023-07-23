import { TextInput } from "@mantine/core";
import { UseFormReturnType } from "@mantine/form";
import { MainComponentType } from "../types.ts";
import { useTranslate } from "../../../hooks/useTranslate.ts";

type Props = {
  form: UseFormReturnType<MainComponentType>;
}

export function TextBox({ form }: Props) {
  const { t } = useTranslate();

  return (
    <TextInput
      className="w-full lg:w-[272px] h-[60px]"
      label={t('destination')}
      placeholder={t('whereCanWeTakeYou')}
      variant="unstyled"
      {...form.getInputProps('destination')}
    />
  );
}
