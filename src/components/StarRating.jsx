// src/components/StarRating.jsx
import React from "react";

// star rating component
const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <i
        key={i}
        className={`bi-star${i <= rating ? "-fill" : ""}`}
        style={{ color: "#ffc107" }}
      ></i>
    );
  }
  return (
    <div className="d-flex justify-content-center small text-warning mb-2">
      {stars}
    </div>
  );
};

export default StarRating;
