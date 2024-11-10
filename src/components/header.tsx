'use client'

import { signOut } from 'next-auth/react'
import { Button } from './ui/button'

function Header() {
  return (
    <header className='w-full py-4 px-8'>
      <div className='flex itmes-center justify-end'>
        <Button className='self-end' onClick={() => signOut({
          callbackUrl: '/'
        })}>Sing Out</Button>
      </div>
    </header>
  )
}

export default Header