import { PlusIcon } from "@heroicons/react/solid"
import Main from "../components/layouts/home/Main"
import Badge from "../components/Badge"
import Table from "../components/Table"

function Home() {
  const totalAmount = 65000
  const remainingAmount = 45400

  const data = [
    {
      item: "House rent",
      amount: 18600,
      description: "House rent or living expense.",
      createdAt: "2023-01-23T06:12:16.219+00:00",
    },
    {
      item: "Donation",
      amount: 1000,
      description: "Donation to mosque.",
      createdAt: "2022-12-24T13:17:52.219+00:00",
    },
    {
      item: "House rent",
      amount: 18600,
      description: "House rent or living expense.",
      createdAt: "2022-11-18T06:12:16.219+00:00",
    },
    {
      item: "Donation",
      amount: 1000,
      description: "Donation to mosque.",
      createdAt: "2022-06-12T13:17:52.219+00:00",
    },
    {
      item: "House rent",
      amount: 18600,
      description: "House rent or living expense.",
      createdAt: "2022-06-03T06:12:16.219+00:00",
    },
    {
      item: "Donation",
      amount: 1000,
      description: "Donation to mosque.",
      createdAt: "2022-06-12T13:17:52.219+00:00",
    },
    {
      item: "House rent",
      amount: 18600,
      description: "House rent or living expense.",
      createdAt: "2021-09-15T06:12:16.219+00:00",
    },
  ]

  return (
    <Main>
      <div
        className={`card mt-6 overflow-hidden overflow-x-scroll scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-inherit scrollbar-thumb-rounded-full sm:scrollbar-hide`}
      >
        <div className="row justify-between mt-2">
          <div className="row space-x-2">
            <Badge label={`T: ${totalAmount}`} />
            <Badge label={`R: ${remainingAmount}`} />
          </div>
          <div>
            <button className="btn-action">
              <PlusIcon className="h-7 w-7 text-gray-300" />
            </button>
          </div>
        </div>
        <Table data={data} />
      </div>
    </Main>
  )
}

export default Home
