import { createStore } from 'zustand'

export type UserStore = {
  name: string
  email: string
  image: string
  isAuth: boolean
  isVerify: boolean
  changeUser: (user: User, isAuth: boolean) => void
  changeVerify: (value: boolean) => void
}

export type User = {
  name: string
  email: string
  image: string
}

export const createUserStore = () => {
  return createStore<UserStore>()((set) => ({
    name: '',
    email: '',
    image: '',
    isAuth: false,
    isVerify: false,
    changeUser: (user: User, isAuth: boolean) => set((state) => {
      return { ...state, ...user, isAuth }
    }),
    changeVerify: (value: boolean) => set((state) => ({ ...state, isVerify: value }))
  }))
}