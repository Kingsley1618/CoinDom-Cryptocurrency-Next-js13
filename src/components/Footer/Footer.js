import React from 'react'
import styles from "./footer.module.css"
import {GrTwitter} from "react-icons/gr"
import Link from 'next/link'
import {BsDiscord} from "react-icons/bs"
import {FaFacebookF} from "react-icons/fa"
import Image from 'next/image'
import FooterImage from "@/assets/images/footer.png"
import {BsYoutube} from "react-icons/bs"
export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
         <Image
  src={FooterImage}
  alt="bg-footer"
 
  className={styles.overlay}
/>
    <div className={`flex flex-col items-center gap-y-6 justify-center`}>
       
<div className="flex justify-center items-center gap-x-6">
 <GrTwitter className={styles.icon}/>   
 <BsDiscord className={styles.icon}/>
 <FaFacebookF className={styles.facebook}/>
 <BsYoutube className={styles.icon}/>
</div>


<div className="flex items-center justify-center gap-x-6 flex-wrap">
    <div className={styles.footertext}>Privacy</div>
    <div className={styles.footertext}>Terms of Use</div>
    <div className={"text-white font-bold text-center"}>Copyright © 2023 <Link href = "https://github.com/Kingsley1618" className="text-[blue] font-bold">Okeze Kingsley.</Link> All Rights Reserved.
</div>
</div>

    </div>
    </div>
  )
}
