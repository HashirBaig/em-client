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

export async function loginUser(data) {
  return api.post(`${apiURLs?.AUTH}`, data)
}

export default api
