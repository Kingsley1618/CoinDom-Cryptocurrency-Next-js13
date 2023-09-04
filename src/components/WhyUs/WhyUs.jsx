import React from 'react'
import styles from "./WhyUs.module.css"
import {FaWallet} from "react-icons/fa"
import {FaPencilRuler} from "react-icons/fa"
import {AiTwotoneThunderbolt} from "react-icons/ai"
import {FaSatelliteDish} from "react-icons/fa"
import Hand from "@/assets/images/hand.png"
import {FaHorseHead} from "react-icons/fa"
import Image from 'next/image'

import {AiFillCrown} from "react-icons/ai"
export default function WhyUs() {
  return (
    <section id ="why-us" className="w-[100%]">
        <h1 className="text-[70px] mt-[80px] text-center font-bold"><span className="text-white">WHY</span> <span className={styles.choose}>CHOOSE US</span></h1>
    
    <div className="flex xl:flex-row flex-col items-center xl:space-x-8 mt-[100px] xl:space-y-0 space-y-6 space-x-0  mx-auto justify-center" style = {{width:"90%"}}>
<div className="flex flex-col w-[100%] gap-y-8">

<div className={`${styles.card} gap-x-4 md:py-6 py-3 px-[10px]`}>
<FaWallet className={`${styles.icons} text-white text-[60px] `}/>
<div>
    <h1 className="text-white text-[26px] font-bold text-left">CONNECT YOUR WALLET</h1>
    <div className="pt-3 text-[20px] text-left">Use Trust Wallet, Metamask or to connect to the app.</div>
</div>
</div>

<div className={`${styles.card} gap-x-4 md:py-6 py-3 px-[10px]`}>
<FaPencilRuler className={`${styles.icons} text-white text-[60px] `}/>
<div>
    <h1 className="text-white text-[26px] font-bold text-left">
SELECT YOUR QUANTITY</h1>
    <div className="pt-3 text-[20px] text-left">Use Trust Wallet, Metamask or to connect to the app.</div>
</div>
</div>

<div className={`${styles.card} gap-x-4 md:py-6 py-3 px-[10px]`}>
<AiTwotoneThunderbolt className={`${styles.icons} text-white text-[60px] `}/>
<div>
    <h1 className="text-white text-[26px] font-bold text-left">CONFIRM TRANSACTION</h1>
    <div className="pt-3 text-[20px] text-left">Earn by selling your crypto on our marketplace.</div>
</div>
</div>



</div>
<div className="xl:max-w-[70%] w-[60%] text-center">
<Image
  src={Hand}
  alt="hand-img"
  layout="responsive" // Use "responsive" for responsive images
  className="xl:w-[100%] lg:max-w-[80%] md:max-w-[50%] w-[100%] block mx-auto"
/>
</div>
<div className="flex flex-col w-[100%] gap-y-8">

<div className={`${styles.card} gap-x-4 md:py-6 py-3 px-[10px]`}>
<FaSatelliteDish className={`${styles.icons} text-white text-[60px]`}/>
<div>
    <h1 className="text-white text-[26px] font-bold text-left">RECEIVE YOUR OWN NFTS</h1>
    <div className="pt-3 text-[20px] text-left">Invest all your crypto at one place on one platform.</div>
</div>
</div>

<div className={`${styles.card} gap-x-4 md:py-6 py-3 px-[10px]`}>
<FaHorseHead className={`${styles.icons} text-white text-[60px] `}/>
<div>
    <h1 className="text-white text-[26px] font-bold text-left">
TAKE A MARKET TO SELL</h1>
    <div className="pt-3 text-[20px] text-left">Discover, collect the right crypto collections to buy or sell..</div>
</div>
</div>


<div className={`${styles.card} gap-x-4 md:py-6 py-3 px-[10px]`}>
<AiFillCrown className={`${styles.icons} text-white text-[60px] `}/>
<div>
    <h1 className="text-white text-[26px] font-bold text-left">DRIVE YOUR COLLECTION</h1>
    <div className="pt-3 text-[20px] text-left">We make it easy to Discover, Invest and manage.</div>
</div>
</div>


</div>

    </div>
    
    </section>
  )
}
