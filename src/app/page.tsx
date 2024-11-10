'use client'

import { signIn, signOut } from 'next-auth/react'
import { Button, buttonVariants } from '@/components/ui/button'
import { useSession } from 'next-auth/react'
import Loader from '@/components/ui/loader'
import Link from 'next/link'

function Landing() {

  const { data: session } = useSession()

  const loading = session === undefined
  const logged = !!session?.user

  return (
    <div className='py-32'>
      <div className="max-w-[1024px] mx-auto flex flex-col justify-center items-center gap-8">
        <h1 className='text-3xl font-bold'>Tracking Matrix</h1>
        <div className='grid grid-cols-2 gap-4'>
          <p className=''>
            Tracking matrix is an application to manage the tasks of a project in the pure style of Trello or Jira, you can create the number of projects you want and invite your members
          </p>
          <p className=''>
            Tracking matrix is an application to manage the tasks of a project in the pure style of Trello or Jira, you can create the number of projects you want and invite your members
          </p>
        </div>
        {loading && <Loader />}
        {(!loading && logged) && (
          <div className='flex gap-4'>
            <Button onClick={() => signOut({
              callbackUrl: '/'
            })}>Sing Out</Button>
            <Link href='/app' className={buttonVariants()}>Go to app</Link>
          </div>
        )
        }
        {(!loading && !logged) && <Button onClick={() => signIn(undefined, {
          callbackUrl: '/app'
        })}>Sing In</Button>}
      </div>
    </div>
  )
}

export default Landing