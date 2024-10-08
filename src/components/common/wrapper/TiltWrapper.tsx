
"use client"

import VanillaTilt from "vanilla-tilt";
import { useEffect, useRef } from "react";
import { TiltWrapperProps } from "@/types/props";

// Mở rộng kiểu HTMLDivElement để thêm thuộc tính vanillaTilt
interface HTMLDivElementWithTilt extends HTMLDivElement {
    vanillaTilt?: VanillaTilt;
}

const TiltWrapper: React.FC<TiltWrapperProps> = ({ children, options }) => {
    const tiltRef = useRef<HTMLDivElementWithTilt | null>(null);

    useEffect(() => {
        const tiltNode = tiltRef.current;

        if (tiltNode) {
            VanillaTilt.init(tiltNode, options || {});

            // Cleanup tilt effect on unmount
            return () => {
                tiltNode.vanillaTilt?.destroy();
            };
        }
    }, [options]);

    return <div ref={tiltRef}>{children}</div>;
};

export default TiltWrapper;
