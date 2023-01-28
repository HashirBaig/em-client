import { useEffect } from "react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ErrorMessage } from "@hookform/error-message"
import { useToast } from "@chakra-ui/react"
import RequiredFieldMark from "../components/RequiredFieldMark"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../redux/features/auth/authSlice"
import { useNavigate } from "react-router-dom"
import { AllRoutesMap } from "../routes/RoutesConfig"

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
})

function Login() {
  const toast = useToast()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state?.auth)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "hashirbaig57@gmail.com",
      password: "123456",
    },
  })

  useEffect(() => {
    if (isError) {
      toast({
        title: "Can't sign in",
        description: message,
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    }

    if (user && isSuccess) {
      navigate(AllRoutesMap?.home)
    }

    // eslint-disable-next-line
  }, [user, isLoading, isError, isSuccess, message, dispatch, navigate])

  const onSubmit = async formData => {
    try {
      dispatch(login(formData))
    } catch (error) {
      console.log(error)
      toast({
        title: "Can't sign in",
        description: error?.message || error,
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
        <div className="row justify-center">
          <img src="/assets/svgs/condensed_logo.svg" alt="EM Logo" />
        </div>
        <div className="row">
          <div className="form-group">
            <div className="flex space-x-1">
              <label htmlFor="email">Email</label>
              <RequiredFieldMark />
            </div>
            <input type="text" id="email" autoComplete="off" placeholder="abc@example.com" {...register("email")} />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => <p className="error-message">{message}</p>}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="flex space-x-1">
              <label htmlFor="password">Password</label>
              <RequiredFieldMark />
            </div>
            <input type="password" id="password" autoComplete="off" {...register("password")} />
            <ErrorMessage
              errors={errors}
              name="password"
              render={({ message }) => <p className="error-message">{message}</p>}
            />
          </div>
        </div>
        <div className="row">
          <button className="btn" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default Login
