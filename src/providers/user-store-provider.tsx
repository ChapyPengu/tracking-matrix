'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore, StoreApi } from 'zustand'

import { UserStore, createUserStore } from '@/stores/user-store'

export type UserStoreApi = StoreApi<UserStore>

export const UserStoreContext = createContext<UserStoreApi | undefined>(undefined)

export function UserStoreProvider({ children }: { children: ReactNode }) {

  const storeRef = useRef<UserStoreApi>()

  if (!storeRef.current) {
    storeRef.current = createUserStore()
  }

  return (
    <UserStoreContext.Provider value={storeRef.current}>
      {children}
    </UserStoreContext.Provider>
  )
}

export function useUserStore() {
  const userStoreContext = useContext(UserStoreContext)

  if (!userStoreContext) {
    throw new Error(`useUserStore must be used within UserStoreProvider`)
  }

  return useStore(userStoreContext, state => state)
}