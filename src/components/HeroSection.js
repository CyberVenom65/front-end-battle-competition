"use client";
import React, { useState, useEffect } from "react";

const texts = [
  "Create reports, forecasts, dashboards & consolidations",
  "Now with AI-insights",
  "Start 14-day free trial",
];

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 to-blue-700 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://cdn.pixabay.com/photo/2024/06/30/10/28/sky-8862862_1280.png')] bg-cover bg-center opacity-30 animate-slow-fade"></div>
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1
          className={`text-white text-4xl sm:text-6xl font-bold transition-opacity duration-500 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          {texts[currentTextIndex]}
        </h1>
        {currentTextIndex === 1 && (
          <p className="text-white mt-4 text-xl transition-opacity duration-500">
            Now with AI-insights
          </p>
        )}
        {currentTextIndex === 2 && (
          <button className="mt-6 px-6 py-3 bg-white text-blue-900 font-semibold rounded shadow hover:bg-gray-100 transition">
            Start 14-day free trial
          </button>
        )}
      </div>
      <style jsx>{`
        @keyframes slowFade {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-slow-fade {
          animation: slowFade 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}