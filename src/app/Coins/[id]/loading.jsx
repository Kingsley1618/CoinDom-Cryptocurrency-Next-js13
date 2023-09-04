import React from 'react'

export default function loading() {
  return (
    <div className="text-white flex h-screen w-[100%] items-center fixed top-0 justify-center animate-spin">
        <img src ="/loading.png" className="w-[60px] h-[60px]" alt="loading"/>
    </div>
  )
}
