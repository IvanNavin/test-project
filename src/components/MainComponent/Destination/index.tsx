import { useLoadScript } from "@react-google-maps/api";
import { MainComponentType } from "../types.ts";
import { UseFormReturnType } from "@mantine/form";
import { TextBox } from "./TextBox.tsx";
import { PlacesAutocomplete } from "./PlacesAutocomplete.tsx";

type Props = {
  form: UseFormReturnType<MainComponentType>;
}

export type Library = "core" | "maps" | "places" | "geocoding" | "routes" | "marker" | "geometry" | "elevation" | "streetView" | "journeySharing" | "drawing" | "visualization";


const libraries: Library[] = ['places'];

export function Destination({ form }: Props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string,
    libraries,
  });

  return isLoaded
    ? <PlacesAutocomplete form={form} />
    : <TextBox form={form} />
}
