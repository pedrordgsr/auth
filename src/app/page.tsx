import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    <div className='flex flex-column p-5 bg-slate-800 rounded-lg'>
      <form className='flex flex-col'>
        <label className='pt-2'>Insira o Nome de Usuário</label>
        <input className='text-black rounded-lg mt-2 py-1' type='text' name='user'></input>
        <label className='pt-2'>Insira a Senha</label>
        <input className='text-black rounded-lg mt-2 py-1' type='password' name='password'></input>
        <button className='pt-2'>Login</button>
      </form>
    </div>
      

      
    </main>
  )
}
