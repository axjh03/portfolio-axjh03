"use client";

import * as React from "react";
import SkillCard from "./SkillCard";

export default function SkillsSlider({ skills, scrollSpeed = 2 }) {
  const [isPaused, setIsPaused] = React.useState(false);
  const containerRef = React.useRef(null);
  const contentRef = React.useRef(null);
  const animationRef = React.useRef();
  const lastTimestampRef = React.useRef();
  const inactivityTimerRef = React.useRef(null);

  // Clone skills for seamless looping
  const items = React.useMemo(() => [...skills, ...skills, ...skills], [skills]);

  const animate = React.useCallback(
    (timestamp) => {
      if (!containerRef.current || !contentRef.current || isPaused) return;

      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;

      const elapsed = timestamp - lastTimestampRef.current;
      const pixelsToScroll = (scrollSpeed * elapsed) / 50; // Faster auto-scroll

      containerRef.current.scrollLeft += pixelsToScroll;

      // Reset scroll when reaching the end of the first loop
      if (containerRef.current.scrollLeft >= contentRef.current.scrollWidth / 3) {
        containerRef.current.scrollLeft -= contentRef.current.scrollWidth / 3;
      }

      lastTimestampRef.current = timestamp;
      animationRef.current = requestAnimationFrame(animate);
    },
    [scrollSpeed, isPaused]
  );

  // Start/stop animation
  React.useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => animationRef.current && cancelAnimationFrame(animationRef.current);
  }, [animate]);

  // Scroll controls
  const scrollLeft = () => {
    containerRef.current?.scrollBy({ left: -250, behavior: "smooth" }); // Faster manual scroll
    resetInactivityTimer();
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: 250, behavior: "smooth" }); // Faster manual scroll
    resetInactivityTimer();
  };

  const resetInactivityTimer = () => {
    setIsPaused(true);
    clearTimeout(inactivityTimerRef.current);
    inactivityTimerRef.current = setTimeout(() => setIsPaused(false), 3000); // Resume after 3s
  };

  return (
    <div className="w-full relative" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10 slider-button"
      >
        &larr;
      </button>
      <button
        onClick={scrollRight}
        class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10 slider-button"
      >
        &rarr;
      </button>

      {/* Auto-scrolling Container */}
      <div ref={containerRef} className="hidden md:block relative overflow-hidden">
        <div ref={contentRef} className="flex w-max">
          {items.map((skill, index) => (
            <div key={index} className="flex-none w-[100px]">
              <SkillCard skill={skill} />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="grid grid-cols-4 gap-1 md:hidden">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
