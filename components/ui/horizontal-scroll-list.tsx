"use client";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
type props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export const HorizontalScrollList = (props: props) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  let isDragging = false;
  let startX = 0;
  let scrollLeft = 0;

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    container.style.cursor = "grabbing";
  };

  const handleMouseLeaveOrUp = () => {
    isDragging = false;
    const container = scrollContainerRef.current;
    if (container) container.style.cursor = "grab";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollContainerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed control
    container.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className={cn("no-scrollbar", props.className)}
      ref={scrollContainerRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
      style={{
        ...props.style,
        display: "flex",
        overflowX: "auto",
        cursor: "grab",
        userSelect: "none",
      }}
    >
      {props.children}
    </div>
  );
};
