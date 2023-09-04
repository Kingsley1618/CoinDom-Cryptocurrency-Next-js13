'use client'
import styles from "./navbar.module.css"
import Link from "next/link"
import React,{useState, useEffect} from 'react'
import {BsTwitter} from "react-icons/bs"
import {FaBars} from "react-icons/fa"
import {BsDiscord} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"
export default function Navbar() {
const [openCanvas, setOpenCanvas] = useState(false)
const [back, setBack] = useState(false)
function topFunc() {
  window.scrollTo({top:0, behavior:"smooth"})
}
function canvasHandler() {
  setOpenCanvas(true)
}
function closeHandler() {
  setOpenCanvas(false)
}
useEffect(() => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Function to handle scrolling
    function scrollFunc() {
      if (window.scrollY > 50) {
        setBack(true);
      } else {
        setBack(false)
      }
    }

    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', scrollFunc);

    // Remove the scroll event listener when the component unmounts
    
  }
}, [window.scrollY]);

  return (
    <>
    {openCanvas? <div className={`${openCanvas? styles.offcanvasOpen : styles.offcanvasClose}`}>
<AiOutlineClose  className={`${styles.close} absolute right-[18px] top-[2px] text-[27px] mt-6 cursor-pointer`} onClick = {closeHandler}/>
    <ul className="flex flex-col mx-auto justify-center items-center font-bold gap-y-7 h-[450px]">
    <Link href="/#" onClick = {closeHandler} className={`${styles.links} cursor-pointer`}><li>Home</li></Link>
  <Link href="/#market" onClick = {closeHandler} className={`${styles.links} cursor-pointer`}><li>Market</li></Link>
  <Link href="/#why-us" onClick = {closeHandler} className={`${styles.links} cursor-pointer`}><li>Choose Us</li></Link>
  <Link href="/#join" onClick = {closeHandler} className={`${styles.links} cursor-pointer`}><li>Join</li></Link>
    </ul>
    
    </div> : null}

    <div className={`${styles.toggle} ${back? "bg-[black] w-[100%] sticky top-0 left-0" : null}`}>
    <div className={`flex justify-between items-center h-[100px] lg:w-[90%] md:w-[95%]  px-4 mx-auto`}>
<Link href = "/#" className="cursor-pointer"><h1 className={`${styles.h1} font-bold text-white text-[1.8rem]`}>COINDOM</h1></Link>

<ul className="nav md:flex space-x-9 font-bold items-center hidden">
  <Link href="#" onClick = {topFunc} className={`${styles.link} cursor-pointer`}><li>Home</li></Link>
  <Link href="/#market" className={`${styles.link} cursor-pointer`}><li>Market</li></Link>
  <Link href="/#why-us" className={`${styles.link} cursor-pointer`}><li>Choose Us</li></Link>
  <Link href="/#join" className={`${styles.link} cursor-pointer`}><li>Join</li></Link>
</ul>


<div className="md:flex hidden items-center space-x-4 text-[1.5rem] text-white">
<Link className={`${styles.icon} cursor-pointer`} href ="/#"><BsTwitter /></Link>
<Link className={`${styles.icon} cursor-pointer`} href="/#"><BsDiscord  /></Link>
</div>
<FaBars  className="text-white font-bold text-[2rem] cursor-pointer md:hidden flex" onClick = {canvasHandler}/>
</div>
    </div>
    </>
  )
}
