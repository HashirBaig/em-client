import { Navigate, Outlet } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { Loading } from "../pages"
import { AllRoutesMap } from "./RoutesConfig"
import { useEffect } from "react"
import { getCurrentUser } from "../services/api"
import { loadUser } from "../redux/features/auth/authSlice"

function PrivateRoutes({ canRoute }) {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const checkForToken = async () => {
    try {
      const res = await getCurrentUser()
      dispatch(loadUser({ user: res?.data }))
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    checkForToken()
    // eslint-disable-next-line
  }, [])

  const token = localStorage?.token
  return !user && token && canRoute ? (
    <Loading />
  ) : user && canRoute ? (
    <Outlet />
  ) : (
    <Navigate to={AllRoutesMap?.login} />
  )
}

export default PrivateRoutes
