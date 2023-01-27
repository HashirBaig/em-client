import useSWR from "swr"
import fetcher from "../fetcher"
import * as apiURLs from "../apiURLs"
import environment from "../../config/environment"

const baseURL = environment?.API_URL

const useRecords = () => {
  const { isLoading, error, data, mutate } = useSWR(`${baseURL}${apiURLs?.AUTH}`, fetcher)
}

export default useRecords
