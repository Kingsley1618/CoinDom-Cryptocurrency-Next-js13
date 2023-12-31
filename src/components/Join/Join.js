import React from 'react'
import styles from "./join.module.css"
import Bitcoin from "@/assets/images/bitcoinFloat.png"
import Ethereum from "@/assets/images/EthFloat.png"
import Image from 'next/image'
export default function Join() {
  return (
    <section id="join">
    <div className="flex md:gap-x-5 justify-center mt-[90px] items-center">
    <Image
  src={Bitcoin}
  alt="btc-image"
  width={70}
  height={70}
  className="md:flex hidden w-[70px] h-[70px] animate-bounce"
/>

<h1 className="sm:text-[90px] text-[50px] font-bold text-white text-center" style = {{fontFamily:`Cambria, Cochin, Georgia, Times, 'Times New Roman', serif`}}>JOIN US VIA <br /> <span className={styles.discord}>DISCORD</span></h1>
<Image
  src={Ethereum}
  alt="eth-image"
  width={70}
  height={70}
  className="md:flex hidden w-[70px] h-[70px] animate-bounce"
/>
    </div>

    <div className={`${styles.text} text-center text-[22px]  px-[80px] block mx-auto text-white mt-2`}>Invest and manage all your crypto at one place.</div>
   <div className="w-[100%] mt-[70px] px-[20px]">
   <button type="button" className={`${styles.btn} text-white font-semibold max-w-[230px] text-[20px] w-[100%] mt-[70px] py-4 block mx-auto`}>Join via Discord</button>
   </div>
    </section>
  )
}
