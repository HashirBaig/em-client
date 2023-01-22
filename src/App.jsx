// import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { useState } from "react"
import { ChakraProvider, theme } from "@chakra-ui/react"
import { SplashScreen, Home } from "./pages"
import { useEffect } from "react"

function App() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    // eslint-disable-next-line
  }, [])

  return <ChakraProvider theme={theme}>{isLoading ? <SplashScreen /> : <Home />}</ChakraProvider>
}

export default App
