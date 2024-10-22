
"use client"

import { TyperProps } from '@/types/props';
import { TypeAnimation } from 'react-type-animation';

export default function Typer({ texts }: TyperProps) {

    const sequence: (string | number)[] = texts.flatMap(text => [text, 3000])

    return (
        <TypeAnimation
            sequence={sequence}
            wrapper="span"
            speed={10}
            className="xl:text-4xl md:text-3xl text-xl text-primary font-bold inline-block pl-2"
            repeat={Infinity}
        />
    )
}
