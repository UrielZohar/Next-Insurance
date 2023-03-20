import { memo } from 'react';
import star from '../../assets/images/star.svg';
import arrowRight from '../../assets/images/arrow-right.svg';

import './MovieCard.scss';

const MovieCard = memo(({movie: {title, rating, image, id, released}, onReadMore}) => {
  const onReadMoreClicked = () => onReadMore(id);
  return (
    <div className='movie-card'>
      <img src={image} alt={title} className='movie-image'></img>
      <div className='movie-title'>
        {title} ({released})
      </div>
      <div className='movie-rating'>
        <img src={star} alt="rating" className='movie-rating-star'/>{rating || 5}
      </div>
      <div className='read-more-button' onClick={onReadMoreClicked}>
        <div className='button-text'>Read more</div>
        <div className='button-arrow'>
          <img src={arrowRight} alt='Read more' className='arrow-right-image'></img>
        </div>
      </div>
    </div>
  );
}, (prevProps, currentProps) => prevProps.id === currentProps.id);

export default MovieCard;