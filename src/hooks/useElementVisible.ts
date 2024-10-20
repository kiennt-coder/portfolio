import { MutableRefObject, useEffect, useState } from "react"


export default function useElementVisible<T>(counterRef: MutableRefObject<T | null>) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.5 } 
        );
    
        if (counterRef.current) {
          observer.observe(counterRef.current as unknown as Element);
        }
    
        return () => {
        // eslint-disable-next-line
          if (counterRef.current) observer.unobserve(counterRef.current as unknown as Element);
        };

      }, [counterRef]);

  return [isVisible]
}
