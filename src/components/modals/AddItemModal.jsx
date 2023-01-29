import { Fragment, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { ErrorMessage } from "@hookform/error-message"
import { XIcon } from "@heroicons/react/solid"
import { Spinner, useToast } from "@chakra-ui/react"
import { addItem } from "../../services/api"

const schema = yup.object().shape({
  item: yup.string().required("Item is required"),
  amount: yup.string(),
  description: yup.string(),
})

export default function AddItemModal({ toggle, isOpen, setIsOpen }) {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      item: "",
      amount: "",
      description: "",
    },
  })

  const onSubmit = async formData => {
    try {
      setIsLoading(true)
      await addItem(formData)
      toggle()
      toast({
        title: "Item Add Successfully",
        description: "Item was added successfully",
        status: "success",
        duration: 4000,
      })
    } catch (error) {
      setIsLoading(false)
      console.log(error)
      toast({
        title: "Item not added",
        description: error?.message || error,
        status: "error",
        duration: 4000,
        isClosable: true,
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-700 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed my-24 inset-0 z-10 overflow-y-auto">
          <div className="flex items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-20`0"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-[#1e1e1e] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* MODAL HEAD */}
                  <div className="px-4 pt-4 sm:px-6">
                    <div className="flex justify-end">
                      <button onClick={toggle}>
                        <XIcon className="h-6 w-6 text-gray-300 hover:text-red-400 transition duration-150 ease-out" />
                      </button>
                    </div>
                  </div>

                  {/* MODAL BODY */}
                  <div className="px-4 pb-4 sm:px-6 sm:pb-4">
                    <div className="row">
                      <div className="form-group">
                        <div className="flex space-x-1">
                          <label htmlFor="item">Item</label>
                        </div>
                        <input
                          type="text"
                          id="item"
                          autoComplete="off"
                          placeholder="Add item..."
                          {...register("item")}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="item"
                          render={({ message }) => <p className="error-message">{message}</p>}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <div className="flex space-x-1">
                          <label htmlFor="amount">Amount</label>
                        </div>
                        <input
                          type="number"
                          id="amount"
                          autoComplete="off"
                          placeholder="39999..."
                          {...register("amount")}
                        />
                        <ErrorMessage
                          errors={errors}
                          name="amount"
                          render={({ message }) => <p className="error-message">{message}</p>}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <div className="flex space-x-1">
                          <label htmlFor="description">Description</label>
                        </div>
                        <textarea
                          className="w-full rounded-md scrollbar-hide bg-inherit caret-white text-gray-300 placeholder:text-[rgb(90,90,90)] border border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:border-transparent px-4 py-2 transition duration-200 ease-out disabled:opacity-50 disabled:cursor-not-allowed"
                          type="text"
                          id="description"
                          autoComplete="off"
                          placeholder="Add description..."
                          {...register("description")}
                        ></textarea>
                        <ErrorMessage
                          errors={errors}
                          name="description"
                          render={({ message }) => <p className="error-message">{message}</p>}
                        />
                      </div>
                    </div>
                  </div>

                  {/* MODAL FOOTER */}
                  <div className="px-4 py-3 mb-4 sm:flex sm:flex-row-reverse sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-base font-medium text-gray-300 shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Add Item
                      {isLoading && <Spinner size={"md"} color={"white"} />}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
