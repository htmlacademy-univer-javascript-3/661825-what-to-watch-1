import {FormEvent, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {useNavigate} from 'react-router-dom';
import {postComment} from '../../store/api-actions';
import {UserComment} from '../../types/user-comment';
import {getFilm} from '../../store/film-reducer/film-selectors';

function AddReviewForm() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const currentFilm = useAppSelector(getFilm);
  const [rating, setRating] = useState({
    ratingStars: 0,
    reviewText: '',
  });

  const onSubmit = (review: UserComment) => {
    dispatch(postComment({comment: review.comment, rating: review.rating, filmId: currentFilm?.id}));
    navigate(`/films/${currentFilm?.id}`);
  };

  const handleOnSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const review: UserComment = {
      filmId: currentFilm?.id,
      rating: rating.ratingStars,
      comment: rating.reviewText
    };
    if (rating.ratingStars && rating.reviewText) {
      onSubmit(review);
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleOnSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {[...Array(10)].map((_, index) => (
            <>
              <input className="rating__input"
                id={`star-${10 - index}`}
                type="radio"
                name="rating"
                value={10 - index}
                checked={rating.ratingStars === (10 - index)}
                onChange={() => {
                  setRating({...rating, ratingStars: (10 - index)});
                }}
              />
              <label className="rating__label" htmlFor={`star-${10 - index}`}>Rating {10 - index}</label>
            </>
          ))}
        </div>
      </div>
      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={(evt) => {
            setRating({...rating, reviewText: evt.target.value});
          }}
        />
        <div className="add-review__submit">
          { (rating.reviewText.length < 50 || rating.reviewText.length >= 400)
            ? <button className="add-review__btn" type="submit" disabled>Post</button>
            : <button className="add-review__btn" type="submit">Post</button>}
        </div>
      </div>
    </form>
  );
}

export default AddReviewForm;
