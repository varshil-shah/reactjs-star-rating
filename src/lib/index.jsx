import PropTypes from "prop-types";
import { useState } from "react";
import { Star } from "./Star";

export default function StarRating({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className = "",
  defaultRating = 0,
  readOnly = false,
  showLabel = true,
  labels = [],
  onSetRating,
}) {
  const [rating, setRating] = useState(
    defaultRating > maxRating ? maxRating : defaultRating
  );
  const [tempRating, setTempRating] = useState(0);

  function handleRating(rating) {
    if (readOnly) return;

    setRating(rating);
    onSetRating?.(rating);
  }

  function handleTempRatingUpdate(tempRating) {
    if (readOnly) return;

    setTempRating(tempRating);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "16px",
      }}
      className={className}
    >
      <div style={{ display: "flex" }}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            color={color}
            size={size}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => handleTempRatingUpdate(i + 1)}
            onHoverOut={() => handleTempRatingUpdate(0)}
          />
        ))}
      </div>
      {showLabel && (
        <p
          style={{
            lineHeight: "1",
            margin: "0",
            color,
            fontSize: `${size / 1.5}px`,
          }}
        >
          {labels.length === maxRating
            ? labels[tempRating ? tempRating - 1 : rating - 1]
            : tempRating || rating || ""}
        </p>
      )}
    </div>
  );
}

// Declaring the prop types
StarRating.propTypes = {
  maxRating: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  defaultRating: PropTypes.number,
  labels: PropTypes.array,
  onSetRating: PropTypes.func,
  readOnly: PropTypes.bool,
  showLabel: PropTypes.bool,
};
