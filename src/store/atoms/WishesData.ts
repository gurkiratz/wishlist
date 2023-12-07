import { atom } from "recoil"
import { Wish } from "./WishState"

export const wishesData = atom({
  key: "wishesData",
  default: [] as Wish[],
})
