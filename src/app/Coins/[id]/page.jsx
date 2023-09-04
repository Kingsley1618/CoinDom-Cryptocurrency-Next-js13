import React from 'react'
import { fetchData } from '@/utils/MarketUtils/apiUtils'
async function Coins({params}) {
    const coins = await fetchData()
  return (
  <>
   {coins.map((coin)=> {
   if(coin.id === params.id){ return <div className="text-white my-[60px] flex flex-col md:flex-row md:divide-x-2 divide-x-0 md:divide-y-0 divide-y-2 max-w-[95%] w-[100%] mx-auto">
    <div className="flex flex-col gap-y-4 basis-1/3 justify-center items-center">
<img src ={coin.image} alt="coin-image" className="max-w-[200px] h-[200px]"/>
<div className="text-[27px] font-bold">{coin.name}</div>
<div className="text-[20px] font-normal">Rank: #{coin.market_cap_rank}</div>
    </div>

    <div className="flex-1 pl-5   md:pt-0  pt-6">
<div className="flex  gap-x-6 justify-between text-center  flex-wrap items-center">
    <div className="text-[20px]">24h Change: <span className="font-semibold pl-1" style = {{color: coin.price_change_percentage_24h >= 0 ? "rgb(14, 203, 129)" : "red"}}>{coin.price_change_percentage_24h.toFixed(2)}%</span></div>

    <div className="text-[20px]">Price: <span className="font-semibold pl-1" style = {{color: coin.price_change_percentage_24h >= 0 ? "rgb(14, 203, 129)" : "red"}}>${coin.current_price.toFixed(2)}</span></div>

    <div className="text-[20px] ">Symbol: {coin.symbol}</div>
</div>

<div className="text-white mt-5" style = {{height:"250px", overflowY:"scroll"}}>
    <div>
Cryptocurrencies are digital or virtual forms of currency built on blockchain technology, which is a decentralized and secure ledger. They offer features like security through cryptography, transparency, and decentralization, making them an innovative addition to the financial landscape.

Key characteristics of cryptocurrencies include their pseudonymous nature, where transactions are recorded on a public ledger without revealing personal information. They enable peer-to-peer transactions, reducing the need for intermediaries, and can be used for various purposes, including online purchases, investments, and as a store of value.

However, cryptocurrencies are known for their price volatility, which can present both opportunities and risks for investors. The regulatory environment for cryptocurrencies varies worldwide, posing challenges and uncertainties. Nevertheless, they continue to evolve and find applications beyond digital currency, with technologies like smart contracts and decentralized finance (DeFi) emerging as notable trends.

Cryptocurrencies have garnered significant attention for their potential to disrupt traditional financial systems and drive innovation in various industries. Despite ongoing debates and developments, their long-term impact remains an open question, making them a subject of great interest and exploration.
Cryptocurrencies are digital currencies built on blockchain technology. They offer security, transparency, and decentralization, enabling peer-to-peer transactions and various use cases. However, their prices are highly volatile, and regulatory challenges persist. Despite uncertainties, cryptocurrencies continue to drive innovation and reshape the financial landscape.
</div>
</div>

    </div>
    </div>
   }
}
   )}

   </>
  )
}

export default Coins