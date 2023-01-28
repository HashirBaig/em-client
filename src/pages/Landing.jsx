import { Link } from "react-router-dom"
import { AllRoutesMap } from "../routes/RoutesConfig"

function Landing() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-3">
        <div>
          <span className="text-4xl text-blue-600 font-semibold">Landing</span>
          <span className="text-4xl text-gray-300 font-semibold">Page</span>
        </div>
        <div className="text-center py-4">
          <Link className="btn btn-outline px-4" to={AllRoutesMap?.login}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Landing
