"use client";

import React, { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  value: string; // e.g. "99.99%", "500M+", "25,000+", "<2.5s", "100%", "190+"
  duration?: number; // duration in ms, default 2200ms
  className?: string;
}

export function AnimatedCounter({ value, duration = 2200, className = "" }: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState<string>("0");
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  // Parse prefix, numeric part, and suffix from strings like "<2.5s", "99.99%", "500M+", "25,000+"
  const parseValue = (val: string) => {
    const match = val.match(/^([^0-9.]*)([0-9.,]+)(.*)$/);
    if (!match) return { prefix: "", target: 0, suffix: val, isFloat: false, decimals: 0 };

    const prefix = match[1] || "";
    const numStr = match[2].replace(/,/g, "");
    const suffix = match[3] || "";
    const target = parseFloat(numStr) || 0;
    const isFloat = numStr.includes(".");
    const decimals = isFloat ? numStr.split(".")[1].length : 0;

    return { prefix, target, suffix, isFloat, decimals };
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    const { prefix, target, suffix, isFloat, decimals } = parseValue(value);
    if (target === 0) {
      setDisplayValue(value);
      return;
    }

    let startTimestamp: number | null = null;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Ease-out cubic formula for a smooth deceleration and realistic pace
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const current = easeOutProgress * target;

      let formattedNum = "";
      if (isFloat) {
        formattedNum = current.toFixed(decimals);
      } else {
        formattedNum = Math.floor(current).toLocaleString("en-IN");
      }

      setDisplayValue(`${prefix}${formattedNum}${suffix}`);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setDisplayValue(value); // Ensure exact target string at the end
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, value, duration]);

  return (
    <span ref={elementRef} className={className}>
      {hasStarted ? displayValue : "0"}
    </span>
  );
}
