'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Table, Pagination } from 'antd';
import {useCurrentPage} from "@/hooks/useCurrentPage"
import styles from "./marketupdate.module.css"
import {useRouter} from "next/navigation"
export default function MarketUpdate({data}) {    
   
    const router = useRouter()
    const currentPage = useCurrentPage()
    const pageSize = 5;
  
    const paginatedData = data.slice((currentPage.currentPage - 1) * pageSize, currentPage.currentPage * pageSize);
  
    
    return (
        <section id = "market">
        <div ref = {currentPage.scrollRef}></div>
    <div className={`${styles.maintable}`}>

<div className={`${styles.table} block mx-auto`}>

<div className={styles.tableheader}>
<div className={styles.rowcell}>Coin</div>
<div className={`${styles.rowcell} text-center`}>Price</div>
<div className={`${styles.rowcell} text-center`}>24h Change</div>
<div className={`${styles.rowcell} text-center`}>Market Cap</div>
</div>


<div className="table-body">
{paginatedData.map((coin)=> {
    return <div key = {coin.id} className = {`${styles.bodyRow} py-5 items-center flex px-2`} onClick = {()=> {router.push(`/Coins/${coin.id}`)}}>
        <div className={`${styles.rowcell} flex gap-x-3 items-center text-white`}>
  <Image
  src={coin.image}
  alt="coin-image"
  width={60}
  height={60}
  className="w-[60px] h-[60px]"
/> <div>{coin.name}</div></div>
        <div className={`${styles.rowcell} text-center  text-white`}>${coin.current_price.toFixed(2)}</div>
        <div className={`${styles.rowcell} text-center`} style = {{ color: coin.price_change_percentage_24h >= 0 ? "rgb(14, 203, 129)" : "red"}}>{coin.price_change_percentage_24h >= 0 ? (
    `+${coin.price_change_percentage_24h.toFixed(2)}%`
  ) : (
    `${coin.price_change_percentage_24h.toFixed(2)}%`
  )}</div>
        <div className={`${styles.rowcell} text-right  text-white`}>${coin.market_cap}</div>
        </div>
})}

</div>

    </div>





    </div>

    <Pagination
        current={currentPage.currentPage}
        total={data.length}
        pageSize={pageSize}
        onChange={currentPage.handleChangePage}
        showSizeChanger={false}
       
        itemRender={(page, type, originalElement) => {
          if (type === 'page') {
            return (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                <a href="#">{page}</a>
              </div>
            );
          }
          return originalElement;
        }}
     />
    </section>
  )
}
