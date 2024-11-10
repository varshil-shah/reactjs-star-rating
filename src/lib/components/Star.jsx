import PropTypes from "prop-types";

export function Star({
  onRate,
  full,
  half,
  onHoverIn,
  onHoverOut,
  color,
  size,
}) {
  return (
    <span
      className="star"
      role="radio"
      aria-checked={full ? "true" : half ? "mixed" : "false"}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onRate(e);
        }
      }}
      style={{
        height: `${size}px`,
        width: `${size}px`,
        cursor: "pointer",
      }}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        stroke={color}
        style={{ position: "relative" }}
      >
        {/* Background star (empty) */}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          fill="none"
        />
        {/* Half star */}
        {half && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 2.927c-.3-.921-1.603-.921-1.902 0l-1.519 4.674a1 1 0 01-.95.69H2.714c-.969 0-1.371 1.24-.588 1.81l3.976 2.888a1 1 0 01.363 1.118l-1.518 4.674c-.3.922.755 1.688 1.538 1.118l3.976-2.888a1 1 0 01.539-.215Z"
            fill={color}
          />
        )}
        {/* Full star */}
        {full && (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            fill={color}
          />
        )}
      </svg>
    </span>
  );
}

Star.propTypes = {
  onRate: PropTypes.func.isRequired,
  full: PropTypes.bool.isRequired,
  half: PropTypes.bool.isRequired,
  onHoverIn: PropTypes.func.isRequired,
  onHoverOut: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
};
