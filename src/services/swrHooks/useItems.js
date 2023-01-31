import useSWR from "swr"
import * as apiURLs from "../apiURLs"
import { getItemsWithFilters } from "../api"

const useItems = () => {
  const cacheKey = apiURLs?.ITEMS
  const { data: res, error, mutate } = useSWR(cacheKey, getItemsWithFilters)

  return {
    items: res?.data?.items || [],
    isLoading: !error && !res,
    error,
    mutateItems: mutate,
  }
}

export default useItems
