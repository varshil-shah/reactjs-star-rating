import { useRating } from "./hooks/useRating";
import { Star } from "./components/Star";
import PropTypes from "prop-types";
import "./styles.css";

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
  allowHalf = false,
}) {
  const {
    rating,
    tempRating,
    handleRating,
    handleTempRating,
    clearTempRating,
  } = useRating({
    defaultRating,
    maxRating,
    onSetRating,
    readOnly,
    allowHalf,
  });

  return (
    <div className={`star-rating-wrapper ${className}`}>
      <div className="stars-container">
        {Array.from({ length: maxRating }, (_, i) => (
          <Star
            key={i}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
            half={tempRating ? tempRating === i + 0.5 : rating === i + 0.5}
            color={color}
            size={size}
            onRate={(e) => handleRating(e, i + 1)}
            onHoverIn={(e) => handleTempRating(e, i + 1)}
            onHoverOut={clearTempRating}
          />
        ))}
      </div>
      {showLabel && (
        <p
          className="rating-label"
          style={{ color, fontSize: `${size / 1.5}px` }}
        >
          {labels.length === maxRating
            ? labels[tempRating ? tempRating - 1 : rating - 1]
            : tempRating || rating || ""}
        </p>
      )}
    </div>
  );
}

StarRating.propTypes = {
  maxRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  className: PropTypes.string,
  defaultRating: PropTypes.number,
  readOnly: PropTypes.bool,
  showLabel: PropTypes.bool,
  labels: PropTypes.arrayOf(PropTypes.string),
  onSetRating: PropTypes.func,
  allowHalf: PropTypes.bool,
};
