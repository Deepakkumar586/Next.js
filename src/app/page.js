"use client"
import Image from 'next/image'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const navigate = (name)=>{
    router.push(name);

  }
  return (
    <main className='flex flex-col'>
      <h1>Basic Routing | PAge</h1>
      <Link href="/login">Go to Login Page</Link>
      <Link href="/about">Go to About Page</Link>



      {/* button use for navigate */}
      {/* <button onClick={()=>router.push("/login")}>Go To Login Page</button>
      <button onClick={()=>router.push("/about")}>Go To About Page</button> */}

      {/* nect way use router */}
      <button onClick={()=>navigate("/login")}>Go To Login Page</button>
      <button onClick={()=>navigate("/about")}>Go To About Page</button>
      </main>
  )
}
