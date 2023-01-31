import fetcher from "../fetcher"

const SWRGlobalConfig = {
  fetcher,
  revalidateOnFocus: true,
  revalidateOnMount: true,
}

export default SWRGlobalConfig
