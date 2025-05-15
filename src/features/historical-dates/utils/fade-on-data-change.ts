import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

/**
 * A hook for fading in and out an element that is currently assigned to ref
 */
export function useFadeOnDataChange<T>(data: T) {
  const fadeElementRef = useRef<HTMLDivElement>(null);
  const [displayData, setDisplayData] = useState(data);

  useEffect(() => {
    if (!fadeElementRef.current) return;

    // Prevent initial fade-in
    if (displayData === data) return;

    // Fade out current items
    gsap.to(fadeElementRef.current.children, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        // After fade-out, update the items
        setDisplayData(data);

        // Fade in new items
        if (!fadeElementRef.current) return;
        gsap.to(fadeElementRef.current?.children, {
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
        });
      },
    });
  }, [data]);

  return {
    fadeRef: fadeElementRef,
    displayData,
  };
}
