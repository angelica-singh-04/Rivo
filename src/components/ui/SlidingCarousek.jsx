import React, { useState, useEffect } from "react";

const SlidingCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(interval);
  }, [length]);

  const goToSlide = (index) => setCurrent(index);

  return (
    <div style={{ width: "60%", overflow: "hidden", margin: "50px auto" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease-in-out",
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{
              minWidth: "100%",
              padding: "40px",
              textAlign: "center",
              fontSize: "18px",
              borderRadius: "8px",
              fontWeight: "bold"
            }}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              height: "12px",
              width: "12px",
              margin: "0 5px",
              display: "inline-block",
              borderRadius: "50%",
              backgroundColor: current === index ? "#333" : "#bbb",
              cursor: "pointer",
              transition: "background-color 0.3s",
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SlidingCarousel;
