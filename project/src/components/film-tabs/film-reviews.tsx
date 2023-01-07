import React from 'react';
import Review from '../../components/review/review';
import { ReviewType } from '../../types/review';

type FilmReviewsProps = {
  reviews: ReviewType[];
}

function FilmReviews(props: FilmReviewsProps) {
  const { reviews } = props;
  const reviewHalf = reviews.slice(0, reviews.length / 2);
  const review2Half = reviews.slice(reviews.length / 2, reviews.length);

  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {review2Half.map((review) => <Review key={review.id} review={review}/>)}
      </div>
      <div className="film-card__reviews-col">
        {reviewHalf.map((review) => <Review key={review.id} review={review}/>)}
      </div>
    </div>
  );
}

export default FilmReviews;
