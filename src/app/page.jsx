import Image from 'next/image'

import Intro from "@/components/Intro/Intro"
import WhyUs from "@/components/WhyUs/WhyUs"
import {fetchData} from "@/utils/MarketUtils/apiUtils"
import Join from "@/components/Join/Join"
import MarketUpdate from "@/components/MarketUpdate/MarketUpdate"
import Footer from "@/components/Footer/Footer"
export default async function Home() {
  

  const allCoins = await fetchData()



  return (
   <main className="">

<Intro />

<MarketUpdate data = {allCoins} />

<WhyUs />

<Join />

<Footer />

   </main>
  )
}
