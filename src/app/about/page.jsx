"use client"
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'


export default function About() {
  const router = useRouter();
  return (
    <div className='flex flex-col'>
   <h1>Hii I am About</h1>
   <Link href="/login">Go To Log in</Link>


   <br></br>
   <Link href="/about/aboutCollege"> go To COllege</Link>
   <br></br>
   <Link href="/about/aboutStudent"> go To SUDENt</Link>

   <button onClick={()=>router.push("/")}>Go TO Home Page</button>



   
    </div>
  )
}
