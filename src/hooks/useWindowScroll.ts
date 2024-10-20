"use client"

import { useEffect, useState } from "react"

interface UseWindowScrollResponse {
  isScroll: boolean;
  scrollValue: number;
}

export default function useWindowScroll(): UseWindowScrollResponse {
  const [isScroll, setIsScroll] = useState<boolean>(false)
  const [scrollValue, setScrollValue] = useState(0)

  function handleWindowScroll(this: Window) {
    const isScrolled = this.scrollY > 0

    setIsScroll(isScrolled)
    setScrollValue(this.scrollY)
  }

  useEffect(() => {
    handleWindowScroll.call(window)
    window.addEventListener("scroll", handleWindowScroll)

    return () => {
      window.removeEventListener("scroll", handleWindowScroll)
    }
  }, [])

  return {
    isScroll,
    scrollValue,
  }
}
