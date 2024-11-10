'use client'
import { useTheme } from "next-themes"

function ToDark() {

  const { setTheme } = useTheme()

  setTheme('system')

  return (
    <div>ToDark</div>
  )
}

export default ToDark