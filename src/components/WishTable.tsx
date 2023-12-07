import { useRecoilValue, useSetRecoilState } from "recoil"
import { wishesData } from "../store/atoms/WishesData"
import { Wish } from "../store/atoms/WishState"
import React, { useEffect, useState } from "react"
import DialogBox from "../components/DialogBox"
import { isOpenState } from "../store/atoms/isOpenState"
import {
  PencilSquareIcon,
  ArrowPathIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

const WishTable = () => {
  const wishes = useRecoilValue(wishesData)
  const setOpen = useSetRecoilState(isOpenState)

  useEffect(() => {
    console.log(wishes)
  }, [wishes])

  return (
    <div className="overflow-x-auto">
      {/* <h2>Category</h2> */}
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="text-left">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Description
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              URL
            </th>
          </tr>
        </thead>

        <tbody>
          {wishes.length > 0 &&
            wishes.map((wish) => <TableRow key={wish.id} myWish={wish} />)}
        </tbody>
      </table>
      <button
        onClick={() => setOpen(true)}
        className="mt-2 py-2 px-4 hover:bg-gray-100 focus:ring-transparent  text-raisin_black w-full transition ease-in duration-200 text-center border-2 border-gray-300 text-base font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <span className="animate-pulse py-1.5 px-3 text-timberwolf-300 rounded-full text-2xl">
          +
        </span>
      </button>
      <DialogBox />
    </div>
  )
}

const TableRow = ({ myWish }: { myWish: Wish }) => {
  const [wish, setWish] = useState({} as Wish)
  const setWishes = useSetRecoilState(wishesData)
  const [isActive, setIsActive] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value
    const updatedWish = {
      ...wish,
      id: myWish.id,
      [e.target.name]: value,
    }
    setWish(updatedWish)

    setWishes((prevWishes) =>
      prevWishes.map((el) => (el.id === updatedWish.id ? updatedWish : el))
    )
  }

  function editWish() {
    setIsActive((prevState) => !prevState)
    setWish({
      ...wish,
      ...myWish,
    })
  }

  function updateWish() {
    setWishes((prevWishes) =>
      prevWishes.map((el) => (el.id === myWish.id ? wish : el))
    )
    setWish({})
    setIsActive(false)
  }

  function deleteWish() {
    setWishes((prevWishes) => {
      return prevWishes.filter((wish) => wish.id !== myWish.id)
    })
    setIsActive(false)
  }

  return (
    <tr className="group cursor-pointer">
      <td className="whitespace-nowrap px-4 py-2 flex justify-around items-center gap-1">
        <PencilSquareIcon
          onClick={editWish}
          className={`h-4 w-4 group-hover:opacity-100 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
        <input
          id="name"
          name="name"
          value={myWish.name || ""}
          onChange={handleChange}
          type="text"
          disabled={!isActive}
          className={`wish-input ${
            isActive ? "border-b border-timberwolf-400" : ""
          }`}
        />
      </td>
      <td className="whitespace-nowrap px-4 py-2 ">
        <input
          id="description"
          name="description"
          value={myWish.description || ""}
          onChange={handleChange}
          type="text"
          disabled={!isActive}
          className={`wish-input ${
            isActive ? "border-b border-timberwolf-400" : ""
          }`}
        />
      </td>
      <td className="whitespace-nowrap px-4 py-2 flex gap-1">
        {isActive ? (
          <input
            id="url"
            name="url"
            value={myWish.url || ""}
            onChange={handleChange}
            type="url"
            disabled={!isActive}
            className={`wish-input ${
              isActive ? "border-b border-timberwolf-400" : ""
            }`}
          />
        ) : (
          <a className="underline block" href={`${myWish.url}`} target="_blank">
            {myWish.url}
          </a>
        )}
        <span className="flex gap-4">
          <ArrowPathIcon
            className={`${isActive ? "block" : "hidden"} h-6  text-blue-900`}
            onClick={updateWish}
          />
          <TrashIcon
            className={`${isActive ? "block" : "hidden"} h-6  text-red-700`}
            onClick={deleteWish}
          />
          <XMarkIcon
            className={`${isActive ? "block" : "hidden"} h-6 `}
            onClick={() => setIsActive(false)}
          />
        </span>
      </td>
    </tr>
  )
}

export default WishTable
