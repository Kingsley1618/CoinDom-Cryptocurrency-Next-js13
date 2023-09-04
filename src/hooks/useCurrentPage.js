'use client'
import {useState, useRef} from "react"
export function useCurrentPage() {
    const scrollRef = useRef()
const [currentPage, setCurrentPage] = useState(1)
const handleChangePage = (page) => {
    setCurrentPage(page);
    scrollRef.current.scrollIntoView({behavior : "smooth"})

  };

    return {
        currentPage: currentPage,
        handleChangePage:handleChangePage,
        scrollRef : scrollRef
    }
}