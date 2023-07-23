import { Global, MantineProvider } from "@mantine/core";
import { fonts } from "./assets/fonts";
import { MainComponent } from "./components/MainComponent";
import { theme } from "./theme";

function App() {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={theme}
    >
      <Global styles={fonts} />
      <MainComponent />
    </MantineProvider>
  )
}

export default App
