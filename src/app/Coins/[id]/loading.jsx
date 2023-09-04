import React from 'react'
import Image from 'next/image'
import Loader from "@/assets/images/hand.png"
export default function loading() {
  return (
    <div className="text-white flex h-screen w-[100%] items-center fixed top-0 justify-center animate-spin">
       <Image
  src={Loader}
  alt="loading"
  width={60}
  height={60}
  className="w-[60px] h-[60px]"
/>
    </div>
  )
}
