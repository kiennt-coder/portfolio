"use client"

import { useEffect, useState } from "react"

interface UseWindowScrollResponse {
  isScroll: boolean;
}

export default function useWindowScroll(): UseWindowScrollResponse {
  const [isScroll, setIsScroll] = useState<boolean>(false)

  function handleWindowScroll(this: Window) {
    const isScrolled = this.scrollY > 0

    setIsScroll(isScrolled)
  }

  useEffect(() => {
    handleWindowScroll.call(window)
    window.addEventListener("scroll", handleWindowScroll)

    return () => {
      window.removeEventListener("scroll", handleWindowScroll)
    }
  }, [])

  return {
    isScroll
  }
}
