// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { ChakraProvider, theme } from "@chakra-ui/react"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <div>Hello world</div>
    </ChakraProvider>
  )
}

export default App
