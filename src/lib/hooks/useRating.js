import { useState, useCallback } from "react";

export function useRating({
  defaultRating,
  maxRating,
  onSetRating,
  readOnly,
  allowHalf,
}) {
  const [rating, setRating] = useState(
    defaultRating > maxRating ? maxRating : defaultRating
  );
  const [tempRating, setTempRating] = useState(0);

  const handleRating = useCallback(
    (e, starRating) => {
      if (readOnly) return;

      if (allowHalf) {
        const rect = e.currentTarget.getBoundingClientRect();
        const starWidth = rect.width;
        const clickPosition = e.clientX - rect.left;
        const isHalf = clickPosition < starWidth / 2;
        const finalRating = isHalf ? starRating - 0.5 : starRating;

        setRating(finalRating);
        onSetRating?.(finalRating);
      } else {
        setRating(starRating);
        onSetRating?.(starRating);
      }
    },
    [readOnly, allowHalf, onSetRating]
  );

  const handleTempRating = useCallback(
    (e, starRating) => {
      if (readOnly) return;

      if (allowHalf) {
        const rect = e.currentTarget.getBoundingClientRect();
        const starWidth = rect.width;
        const mousePosition = e.clientX - rect.left;
        const isHalf = mousePosition < starWidth / 2;
        const tempRating = isHalf ? starRating - 0.5 : starRating;
        setTempRating(tempRating);
      } else {
        setTempRating(starRating);
      }
    },
    [readOnly, allowHalf]
  );

  return {
    rating,
    tempRating,
    handleRating,
    handleTempRating,
    clearTempRating: () => setTempRating(0),
  };
}
