import { useEffect } from "react"
import { LogoutIcon } from "@heroicons/react/solid"
import { logout } from "../../../redux/features/auth/authSlice"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { AllRoutesMap } from "../../../routes/RoutesConfig"

function Header() {
  const dispatch = useDispatch()
  const { user, isSuccess, isLoading, message, isError } = useSelector(state => state?.auth)
  const navigate = useNavigate()

  useEffect(() => {
    if (isError) {
      console.error(message)
    }

    if (!user && isSuccess) {
      navigate(AllRoutesMap?.signIn)
    }

    // eslint-disable-next-line
  }, [user, isLoading, isError, isSuccess, message, dispatch, navigate])

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <header className="w-full h-[74px] border-b border-gray-600 flex items-center justify-between px-5">
      <img className="h-16 w-60" src="/assets/svgs/un_condensed_logo.svg" alt="EM Logo" />
      <LogoutIcon
        className="h-10 w-10 text-gray-300 hover:text-red-400 cursor-pointer transition duration-150 ease-out"
        onClick={handleLogout}
      />
    </header>
  )
}

export default Header
