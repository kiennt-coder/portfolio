"use client"

import { Props as CountUpProps, useCountUp } from 'use-count-up'

export const CountUp = ({ ...props }: CountUpProps) => {
    const { value } = useCountUp({
        isCounting: true,
        duration: 3.2,
        ...props
    })

    return value
}