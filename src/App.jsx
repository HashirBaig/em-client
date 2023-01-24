import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, SignIn, SignUp } from "./pages"
import { AllRoutesMap } from "./routes/RoutesConfig"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path={AllRoutesMap?.landing} element={<Home />} exact />
          <Route path={AllRoutesMap?.signIn} element={<SignIn />} exact />
          <Route path={AllRoutesMap?.signUp} element={<SignUp />} exact />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
