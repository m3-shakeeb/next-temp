"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { useMemo, useRef } from "react";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
}

export function WorldMap({ dots = [] }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // Function to project geographical coordinates to SVG coordinates
  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  // Memoize points to avoid recalculating
  const points = useMemo(
    () =>
      dots.map((dot) => ({
        start: projectPoint(dot.start.lat, dot.start.lng),
        end: projectPoint(dot.end.lat, dot.end.lng),
      })),
    [dots]
  );

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1] rounded-lg relative font-sans">
      <Image
        className="h-full w-full [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_90%,transparent)] pointer-events-none select-none opacity-45"
        alt="img"
        src="/2560px-World_map_with_points.png"
        layout="fill"
        objectFit="cover"
      />
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity="1" />
            <stop
              offset="95%"
              stopColor="hsl(var(--primary))"
              stopOpacity="1"
            />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {points.map((point, i) => (
          <g key={`path-group-${i}`}>
            <motion.path
              d={createCurvedPath(point.start, point.end)}
              fill="none"
              stroke="url(#path-gradient)"
              strokeWidth="1"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.5 * i,
                ease: "easeOut",
              }}
            ></motion.path>

            {/* Start Point */}
            <circle
              cx={point.start.x}
              cy={point.start.y}
              r="2"
              fill={`hsl(var(--primary))`}
            />
            <circle
              cx={point.start.x}
              cy={point.start.y}
              r="2"
              fill={`hsl(var(--primary))`}
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="2"
                to="8"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>

            {/* End Point */}
            <circle
              cx={point.end.x}
              cy={point.end.y}
              r="2"
              fill={`hsl(var(--primary))`}
            />
            <circle
              cx={point.end.x}
              cy={point.end.y}
              r="2"
              fill={`hsl(var(--primary))`}
              opacity="0.5"
            >
              <animate
                attributeName="r"
                from="2"
                to="8"
                dur="1.5s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                from="0.5"
                to="0"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}
