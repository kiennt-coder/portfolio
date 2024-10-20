"use client"

import { useCountUp } from 'use-count-up'
import { BaseCountUpProps } from '@/types/base'

export const CountUp = ({ children, ...props }: BaseCountUpProps) => {
    const { value, reset } = useCountUp({
        isCounting: true,
        duration: 3.2,
        ...props
    })

    return <>{children(value as number, reset)}</>
}