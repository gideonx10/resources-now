"use client";

import { animate, useInView, useMotionValue, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function AnimatedCounter({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  useMotionValueEvent(motionValue, "change", (latest) => {
    setDisplay(Math.round(latest));
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionValue, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
    });
    return controls.stop;
  }, [isInView, motionValue, value]);

  return <span ref={ref}>{display}</span>;
}
