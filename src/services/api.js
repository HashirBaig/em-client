import axios from "axios"
import * as apiURLs from "./apiURLs"
import environment from "../config/environment"

const api = axios.create({
  baseURL: `${environment?.API_URL}`,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers["x-auth-token"] = localStorage.token
  }

  return config
})

/**
 intercept any error responses from the api
 and check if the token is no longer valid.
 ie. Token has expired or user is no longer
 authenticated.
 logout the user if the token has expired
**/
api.interceptors.response.use(
  res => res,
  err => {
    if (err.message.includes(401)) {
      // add logout statement here
    }
    return Promise.reject(err)
  }
)

// --- AUTH --- //
export async function loginUser(data) {
  return api.post(`${apiURLs?.AUTH}`, data)
}

export async function logoutUser() {
  return api.post(`${apiURLs?.AUTH}/logout`)
}

export async function getCurrentUser() {
  return api.get(`${apiURLs?.AUTH}`)
}

// --- ITEMS --- //
export async function addItem(data) {
  return api.post(`${apiURLs?.ITEMS}/add-item`, data)
}
export default api
