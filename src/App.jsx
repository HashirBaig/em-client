import { ChakraProvider, theme } from "@chakra-ui/react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { SWRConfig } from "swr"
import { Home, Login, SignUp, Landing, NotFound } from "./pages"
import { AllRoutesMap, canRouteOn } from "./routes/RoutesConfig"
import PrivateRoutes from "./routes/PrivateRoutes"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { logout } from "./redux/features/auth/authSlice"
import { SWRGlobalConfig } from "./services/swrHooks"

function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const canRoute = canRouteOn(window?.location?.pathname)

  useEffect(() => {
    const token = localStorage.token
    if ((!user && token && !canRoute) || (!user && !token && !canRoute)) {
      navigate(AllRoutesMap?.notFound)
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    // If user logouts in one tab, all tabs are logged out
    window.addEventListener("storage", () => {
      if (!localStorage.token) {
        dispatch(logout())
      }
    })

    // eslint-disable-next-line
  }, [])

  return (
    <SWRConfig value={SWRGlobalConfig}>
      <ChakraProvider theme={theme}>
        <Routes>
          {/* PRIVATE ROUTES */}
          <Route element={<PrivateRoutes canRoute={canRoute} />}>
            <Route path={AllRoutesMap?.home} element={<Home />} exact />
          </Route>

          {/* PUBLIC ROUTES */}
          <Route path={AllRoutesMap?.landing} element={<Landing />} exact />
          <Route path={AllRoutesMap?.login} element={<Login />} exact />
          <Route path={AllRoutesMap?.signUp} element={<SignUp />} exact />
          <Route path={AllRoutesMap?.notFound} element={<NotFound />} exact />
        </Routes>
      </ChakraProvider>
    </SWRConfig>
  )
}

export default App
