"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useState } from "react";

export default function Home() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const router = useRouter()

  async function handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    
    const result = await signIn('credentials', {
      email,
      password,
      redirect: false
    })

    if (result?.error){
      console.log(result)
      return
    }
    console.log(result)
    router.replace('/admin')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-column p-5 bg-slate-800 rounded-lg">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <label className="pt-2">Insira o email</label>
          <input
            className="text-black rounded-lg mt-2 py-1"
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <label className="pt-2">Insira a Senha</label>
          <input
            className="text-black rounded-lg mt-2 py-1"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" className="pt-2">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
