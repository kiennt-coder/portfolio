"use client";

import AOS from "aos";
import { useEffect } from "react";
import { AosWrapperProps } from "@/types/props";

// Import css
import "aos/dist/aos.css";

export default function AosWrapper({ children, ...props }: AosWrapperProps) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });

        return () => {
            AOS.refreshHard();
        };
    }, []);

    return <div {...props}>{children}</div>;
}
