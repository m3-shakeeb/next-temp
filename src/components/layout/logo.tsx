export function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-primary transition-colors duration-300 hover:text-primary/80"
    >
      <path
        d="M20 4L34.641 12V28L20 36L5.35898 28V12L20 4Z"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0 100"
          to="100 100"
          dur="1.5s"
          begin="0s"
          fill="freeze"
        />
      </path>
      <path
        d="M20 4L34.641 12L20 20L5.35898 12L20 4Z"
        className="fill-current"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          from="0"
          to="0.2"
          dur="1s"
          begin="1s"
          fill="freeze"
        />
      </path>
      <path
        d="M20 20V36"
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="stroke-dasharray"
          from="0 100"
          to="100 100"
          dur="0.5s"
          begin="1.2s"
          fill="freeze"
        />
      </path>
      <circle cx="20" cy="20" r="4" className="fill-current" opacity="0">
        <animate
          attributeName="opacity"
          from="0"
          to="1"
          dur="0.3s"
          begin="1.5s"
          fill="freeze"
        />
      </circle>
    </svg>
  );
}
