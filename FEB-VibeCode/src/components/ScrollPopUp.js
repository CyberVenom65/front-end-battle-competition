import React, { useEffect, useState } from "react";

export default function ScrollPopUp() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed bottom-1 right-8 p-4 bg-blue-600 text-white rounded-lg shadow-lg transition-transform transform ${
        isVisible ? "translate-y-0" : "translate-y-20"
      }`}
      style={{ transitionDuration: "100ms", cursor: "pointer" }}
    >
      <p>↑</p>
    </div>
  );
}
