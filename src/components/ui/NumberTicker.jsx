"use client";
import { useEffect, useState } from "react";

export default function NumberTicker({ value = 1000, duration = 6000, className = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const incrementTime = Math.max(Math.floor(duration / end), 1);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);

      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <h1 className={className}>
      {count.toLocaleString()}
    </h1>
  );
}
