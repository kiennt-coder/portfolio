"use client"

import { CSSProperties, useRef } from "react";
import { SkillProgressProps } from "@/types/props";
import { CountUp } from "@components/common/countUp";
import useElementVisible from "@hooks/useElementVisible";

export default function SkillProgress({ label, value }: SkillProgressProps) {
    const progressRef = useRef<HTMLDivElement | null>(null)
    const [isVisible] = useElementVisible(progressRef)

    return (
        <CountUp isCounting={isVisible} end={value}>
            {(counter) => (
                <div ref={progressRef} className="text-center">
                    <div className="radial-progress text-4xl font-semibold text-primary [--thickness:0.375rem] xl:[--size:12rem] lg:[--size:10rem] [--size:12rem]" style={{ "--value": counter } as CSSProperties} role="progressbar" title={label}>
                        <span className="text-base-content dark:text-neutral-50">{counter}%</span>
                    </div>
                    <h4 className="mt-4 lg:text-2xl text-xl font-semibold dark:text-neutral-50">{label}</h4>
                </div>
            )}
        </CountUp>
    )
}