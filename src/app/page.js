"use client";
import { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import CarouselSwitch from "../components/CarouselSwitch";
import ShowcaseWork from "../components/ShowcaseWork";
import ScrollPopUp from "../components/ScrollPopUp";
import BrandKits from "../components/BrandKits";

export default function Home() {
  const getInitialTheme = () => {
    if (typeof window !== "undefined" && window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "dark";
      }
    }
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen relative">
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="theme-toggle-button"
      >
        {theme === "light" ? "🌞" : "🌙"}
      </button>
      <main>
        <HeroSection />
      </main>
      <div className="pt-8">
        <ShowcaseWork />
      </div>
      <div className="pt-8">
        <BrandKits />
      </div>
      <div className="pt-8">
        <CarouselSwitch />
      </div>
      <ScrollPopUp />

      {/* GitHub Repo Section */}
      <div className="pt-12 px-6" id="github">
        <h2 className="text-2xl font-bold mb-2 text-cyan-300">📦 Project Repository</h2>
        <p className="mb-2 text-gray-300">
          You can view all the source code for this website and its features here:
        </p>
        <a
          href="https://github.com/CyberVenom65/front-end-battle-competition"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 underline hover:text-cyan-300 transition"
        >
          https://github.com/CyberVenom65/front-end-battle-competition
        </a>
      </div>
    </div>
  );
}