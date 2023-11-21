import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    <div className='flex flex-col items-center p-5 bg-slate-800 rounded-lg'>
      <h1>Seja bem-vindo!</h1>
        <form>
            <button className='mt-3 bg-slate-500 rounded-xl px-4'>Sair</button>
        </form>
    </div>
      

      
    </main>
  )
}
