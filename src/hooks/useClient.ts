"use client"

import { useLayoutEffect, useState } from "react"


export default function useClient() {
    const [isMounted, setIsMounted] = useState(false)

    useLayoutEffect(() => {
        setIsMounted(true)
        return () => {
            setIsMounted(false)
        }
    }, [])

  return [isMounted]
}
