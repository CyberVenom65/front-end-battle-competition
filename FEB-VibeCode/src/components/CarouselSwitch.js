"use client";
import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    id: 1,
    title: "Slide 1",
    description: "Description for slide 1",
    image: "/cards.png",
  },
  {
    id: 2,
    title: "Slide 2",
    description: "Description for slide 2",
    image: "/graph.png",
  },
  {
    id: 3,
    title: "Slide 3",
    description: "Description for slide 3",
    image: "/stats.png",
  },
];

export default function CarouselSwitch() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setCurrentIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [currentIndex]);

  return (
    <div className="carousel-switch max-w-4xl mx-auto relative overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(${-currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex flex-col items-center bg-white dark:bg-gray-800 p-6"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">
              {slide.title}
            </h3>
            <p className="text-gray-700 py-3 dark:text-gray-300">{slide.description}</p>
          </div>
        ))}
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === currentIndex ? "bg-blue-600" : "bg-gray-300"
            }`}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
