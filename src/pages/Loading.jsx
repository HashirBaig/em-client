import { Spinner } from "@chakra-ui/react"

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Spinner size="xl" color="white" />
    </div>
  )
}

export default Loading
