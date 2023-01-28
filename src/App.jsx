import { ChakraProvider, theme } from "@chakra-ui/react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home, Login, SignUp, Landing } from "./pages"
import { AllRoutesMap } from "./routes/RoutesConfig"
import PrivateRoutes from "./routes/PrivateRoutes"

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path={AllRoutesMap?.home} element={<Home />} exact />
          </Route>
          <Route path={AllRoutesMap?.landing} element={<Landing />} exact />
          <Route path={AllRoutesMap?.login} element={<Login />} exact />
          <Route path={AllRoutesMap?.signUp} element={<SignUp />} exact />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App
