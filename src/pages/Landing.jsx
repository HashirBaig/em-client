import { Link } from "react-router-dom"
import { AllRoutesMap } from "../routes/RoutesConfig"

function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center py-4">
        <Link className="btn btn-outline px-4" to={AllRoutesMap?.login}>
          Get Started
        </Link>
      </div>
    </div>
  )
}

export default Landing
