export const AllRoutesMap = {
  landing: "/",
  home: "/home",
  login: "/login",
  signUp: "/sign-up",
  notFound: "/not-found",
}

export const canRouteOn = path => {
  if (!path) return false

  const isRoutable = Object.values(AllRoutesMap).includes(path)
  return isRoutable
}
