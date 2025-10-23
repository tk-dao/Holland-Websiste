import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("show");
      return;
    }

    const onIntersect = (entries, obs) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          obs.unobserve(entry.target); // one-and-done
        }
      }
    };

    // Use a *very permissive* config so we don't miss it
    const obs = new IntersectionObserver(onIntersect, {
      root: null,
      threshold: 0, // fire as soon as a pixel is visible
      rootMargin: "0px 0px -50px 0px", // no shrinking of the viewport
    });

    // Observe on the next frame to avoid a race with initial layout/paint
    const id = requestAnimationFrame(() => obs.observe(el));

    return () => {
      cancelAnimationFrame(id);
      obs.disconnect();
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
