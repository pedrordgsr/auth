import { nextAuthOptions } from '@/app/api/auth/[...nextauth]/route'
import ButtonLogout from '@/components/ButtonLogout'
import { getServerSession } from 'next-auth'

import Image from 'next/image'


export default async function Home() {
  const session = await getServerSession(nextAuthOptions)



  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    <div className='flex flex-col items-center p-5 bg-slate-800 rounded-lg'>
      <h1>Seja bem-vindo {session?.user.email}!</h1>
        <ButtonLogout/>
    </div>
      

      
    </main>
  )
}
