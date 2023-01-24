import dayjs from "dayjs"

function Table({ data, isLoading = false, checkboxSelection = false }) {
  return (
    <>
      <table className="border-collapse w-full text-gray-300 my-4">
        <thead>
          <tr>
            <th className="py-3 border border-gray-600">Sr No</th>
            <th className="py-3 border border-gray-600">Items</th>
            <th className="py-3 border border-gray-600">Amount</th>
            <th className="py-3 border border-gray-600">Date</th>
            <th className="py-3 border border-gray-600">Description</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 &&
            data?.map(({ item, description, createdAt, amount }, idx) => (
              <tr className="border-b border-gray-600 hover:bg-[rgba(75,85,99,0.1)]" key={`record-${idx}`}>
                <td className="text-center py-3">{idx + 1}</td>
                <td className="text-center py-3">{item}</td>
                <td className="text-center py-3">{amount}</td>
                <td className="text-center py-3">{dayjs(createdAt).format("DD/MM/YYYY")}</td>
                <td className="text-center py-3">{description}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
