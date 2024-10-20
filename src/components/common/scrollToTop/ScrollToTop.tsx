"use client"

import { cn } from "@helpers/common";
import { ChevronDoubleUp } from "@components/icons";
import useWindowScroll from "@hooks/useWindowScroll";


export default function ScrollToTop() {
    const { scrollValue } = useWindowScroll();

    const isHidden = scrollValue <= 1000;

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <div className={cn("fixed right-10 bottom-10 ease-linear duration-500", isHidden && "opacity-0 invisible")}>
            <span className="btn btn-circle !text-neutral-50 !bg-primary !border-primary" onClick={handleScrollToTop}>
                <ChevronDoubleUp />
            </span>
        </div>
    )
}
