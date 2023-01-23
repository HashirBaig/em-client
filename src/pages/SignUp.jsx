import RequiredFieldMark from "../components/RequiredFieldMark"

function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="auth-form">
        <div className="row justify-center">
          <img src="/assets/svgs/condensed_logo.svg" alt="EM Logo" />
        </div>
        <div className="row">
          <div className="form-group">
            <div className="flex space-x-1">
              <label htmlFor="email">Email</label>
              <RequiredFieldMark />
            </div>
            <input type="text" id="email" autoComplete="off" placeholder="abc@example.com" />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="flex space-x-1">
              <label htmlFor="password">Password</label>
              <RequiredFieldMark />
            </div>
            <input type="password" id="password" autoComplete="off" />
          </div>
        </div>
        <div className="row">
          <div className="form-group">
            <div className="flex space-x-1">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <RequiredFieldMark />
            </div>
            <input type="password" id="confirmPassword" autoComplete="off" />
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
