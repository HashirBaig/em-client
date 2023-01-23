import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useToast } from "@chakra-ui/react"
import RequiredFieldMark from "../components/RequiredFieldMark"

const schema = yup.object().shape({
  email: yup.string().required("Email is required"),
  password: yup.string().required("Password is required"),
})

function SignUp() {
  const toast = useToast()

  const { register, handleSubmit } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
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
        isClosable: true,
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
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="flex space-x-1">
              <label htmlFor="password">Password</label>
              <RequiredFieldMark />
            </div>
            <input type="password" id="password" autoComplete="off" {...register("password")} />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="flex space-x-1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <RequiredFieldMark />
            </div>
            <input type="password" id="confirmPassword" autoComplete="off" {...register("confirmPassword")} />
          </div>
        </div>
        <div className="row">
          <button className="btn" type="submit">
            Create Account
          </button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
