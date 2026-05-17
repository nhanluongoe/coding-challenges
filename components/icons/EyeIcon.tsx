type EyeIconProps = {
  hidden?: boolean;
  className?: string;
};

export default function EyeIcon({
  hidden = false,
  className = "size-4",
}: EyeIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {hidden ? (
        <>
          <path d="M3 3l18 18" />
          <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
          <path d="M9.9 4.2A10.7 10.7 0 0 1 12 4c5 0 9 4.4 10.5 8a13 13 0 0 1-3.1 4.4" />
          <path d="M6.1 6.1A13 13 0 0 0 1.5 12C3 15.6 7 20 12 20a10.7 10.7 0 0 0 4.1-.8" />
        </>
      ) : (
        <>
          <path d="M1.5 12S5.5 4 12 4s10.5 8 10.5 8-4 8-10.5 8S1.5 12 1.5 12Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  );
}
