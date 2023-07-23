import { useLoadScript } from "@react-google-maps/api";
import { MainComponentType } from "../types.ts";
import { UseFormReturnType } from "@mantine/form";
import { TextBox } from "./TextBox.tsx";
import { PlacesAutocomplete } from "./PlacesAutocomplete.tsx";

type Props = {
  form: UseFormReturnType<MainComponentType>;
}

const libraries: any[] = ['places'];

export function Destination({ form }: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  return isLoaded
    ? <PlacesAutocomplete form={form} />
    : <TextBox form={form} />
}
