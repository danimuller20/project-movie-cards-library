import React from 'react';

export default function Rating(rating) {
  return (
    <article className="movie-card-rating">
      <div className="rating">{ rating }</div>
    </article>
  );
}
