import { atom } from "recoil"
// import { nanoid } from "nanoid"

export interface Wish {
  id?: string
  name?: string
  description?: string
  url?: string
}

export const wishState = atom({
  key: "wishState",
  default: {} as Wish,
})
