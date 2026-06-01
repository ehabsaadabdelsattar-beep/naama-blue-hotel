export function Logo({ className = "h-12 w-auto scale-110" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Naama Blue text */}
      <text
        x="10"
        y="25"
        fontFamily="serif"
        fontSize="20"
        fontWeight="bold"
        fill="white"
        letterSpacing="0.5"
      >
        Naama Blue
      </text>

      {/* Hotel text */}
      <text
        x="95"
        y="38"
        fontFamily="serif"
        fontSize="12"
        fontWeight="600"
        fill="#FF6B35"
        letterSpacing="0.3"
      >
        Hotel
      </text>

      {/* Wave */}
      <path
        d="M 10 35 Q 25 28 40 35 T 70 35"
        stroke="#3B9FD9"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
