import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ErrorMessage } from "@hookform/error-message"
import { useToast } from "@chakra-ui/react"
import RequiredFieldMark from "../components/RequiredFieldMark"

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
  confirmPassword: yup.string().required("Confirm password is required"),
})

function SignUp() {
  const toast = useToast()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = formData => {
    try {
      console.log("form-data: ", formData)
      toast({
        title: "Account created successfully",
        description: "Account created successfully",
        status: "success",
        duration: 4000,
      })
    } catch (error) {
      console.log(error)
      toast({
        title: "Can't create an account",
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
          <div className="form-group">
            <div className="flex space-x-1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <RequiredFieldMark />
            </div>
            <input type="password" id="confirmPassword" autoComplete="off" {...register("confirmPassword")} />
            <ErrorMessage
              errors={errors}
              name="confirmPassword"
              render={({ message }) => <p className="error-message">{message}</p>}
            />
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
