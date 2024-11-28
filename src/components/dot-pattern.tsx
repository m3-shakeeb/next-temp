export function DotPattern() {
  return (
    <div className="absolute inset-0  h-full w-full">
      <svg
        className="absolute h-full w-full   [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="dot-pattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" className="fill-primary" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#dot-pattern)"
        />
      </svg>
    </div>
  );
}
