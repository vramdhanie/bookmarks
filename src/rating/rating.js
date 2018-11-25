import React from 'react';
import './rating.css';

export default function Rating(props) {
  const stars = [0,0,0,0,0];
  stars.fill(<span>&#9733;</span>, 0, props.value);
  stars.fill(<span>&#9734;</span>, props.value, 5);
  return (
    <div className="rating">
      {stars}
    </div>
  );
}

