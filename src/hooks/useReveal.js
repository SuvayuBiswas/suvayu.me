import { useEffect, useRef } from "react";

export default function useReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("reveal-visible");
          } else {
            const rect = entry.boundingClientRect;

            if (rect.top > window.innerHeight) {
              return;
            }
            element.classList.remove("reveal-visible");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    if (element) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return ref;
}
