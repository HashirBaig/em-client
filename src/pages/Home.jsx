import { useState } from "react"
import { PlusIcon } from "@heroicons/react/solid"
import Main from "../components/layouts/home/Main"
import Badge from "../components/Badge"
import Table from "../components/Table"
import AddItemModal from "../components/modals/AddItemModal"
import { useItems } from "../services/swrHooks"

function Home() {
  const { isLoading, items } = useItems()
  const [openAddItemModal, setOpenAddItemModal] = useState(false)

  const toggleAddItemModal = () => setOpenAddItemModal(!openAddItemModal)

  const totalAmount = 65000
  const remainingAmount = 45400

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
            <button className="btn-action" onClick={toggleAddItemModal}>
              <PlusIcon className="h-7 w-7 text-gray-300" />
            </button>
          </div>
        </div>
        <Table data={items} isLoading={isLoading} />
      </div>
      {openAddItemModal && (
        <AddItemModal toggle={toggleAddItemModal} isOpen={openAddItemModal} setIsOpen={setOpenAddItemModal} />
      )}
    </Main>
  )
}

export default Home
