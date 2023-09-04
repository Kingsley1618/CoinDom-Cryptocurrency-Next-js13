import React from 'react'
import styles from "./Intro.module.css"
import {coinFetch} from "@/utils/IntroUtils/apiUtils"
import Image from 'next/image'
import Bitcoin from "@/assets/images/bitcoinFloat.png"
import Ethereum from "@/assets/images/EthFloat.png"
async function Intro() {
    const data = await coinFetch()
  return (
    <div>

<div className="flex mx-auto items-center justify-center gap-x-3 lg:px-1 px-3 w-[100%] mt-8 lg:w-[93%] w-[100%]">
<Image
  src={Bitcoin}
  alt="btc-image"
  width={70}
  height={70}
  className="md:flex hidden w-[70px] h-[70px] animate-bounce"
/>

<div className="text-white md:text-[70px] lg:text-[80px] md:text-[60px] text-[50px] text-[50px] text-center font-bold"style = {{flex:"1"}} >
TRACK AND TRADE
</div>
<Image
  src={Ethereum}
  alt="btc-image"
  width={70}
  height={70}
  className="md:flex hidden w-[70px] h-[70px] animate-bounce"
/>
</div>

<div className={`${styles.crypto} font-bold md:text-[70px] text-[50px] text-center`}>CRYPTO CURRENCIES</div>


<div className="grid md:grid-cols-4 md:gap-y-0 gap-y-7 grid-cols-2 w-[100%] max-w-[900px] text-center justify-center mx-auto block gap-x-8 mt-[90px]">

{data.map((coin)=> {
    return <div key = {coin.id} className="flex flex-col items-center gap-y-2">
      <Image
  src={coin.image}
  alt="coin-img"
  width={80}
  height={80}
  className="w-[80px] h-[80px]"
/>
        <div><span className="text-white font-bold">{coin.name}</span> <span className="text-[red] font-bold">{coin.price_change_percentage_24h.toFixed(3)}%</span></div>

        <div className="text-white">${coin.current_price}</div>
        </div>
})}



</div>
    </div>
  )
}

export default Intro