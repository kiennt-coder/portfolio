"use client"

import { useRef } from "react";
import { FunFactStatProps } from "@/types/props";
import { CountUp } from "@components/common/countUp";
import useElementVisible from "@hooks/useElementVisible";

export default function FunFactStat({ value, description, suffix }: FunFactStatProps) {
    const statRef = useRef<HTMLDivElement | null>(null)
    const [isVisible] = useElementVisible(statRef)

    return (
        <CountUp isCounting={isVisible} end={value}>
            {(counter) => (
                <div ref={statRef} className="px-7 py-12 flex flex-row items-center md:justify-start justify-center gap-6 border border-gray-600 rounded-lg">
                    <div className="flex flex-row items-center justify-start lg:text-6xl md:text-7xl text-6xl text-primary font-semibold">
                        <span>{counter}</span>
                        {suffix ? <span className="uppercase">{suffix}</span> : null}
                    </div>
                    <h3 className="w-28 xl:text-xl lg:text-lg text-xl text-neutral-50 font-semibold leading-8">{description}</h3>
                </div>
            )}
        </CountUp>
    )
}