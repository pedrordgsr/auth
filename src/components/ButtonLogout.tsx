'use client'
import { useRouter } from 'next/navigation'
import { signOut } from 'next-auth/react'

export default function ButtonLogout(){
    const router = useRouter()

    async function logout() {
        await signOut({
            redirect: false
         })

    router.replace('/')
  }
return <button onClick={logout} className='mt-3 bg-slate-500 rounded-xl px-4'>Sair</button>
}