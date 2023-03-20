import React, { memo, useRef, useEffect, useContext } from 'react';
import classNames from 'classnames';
import DeviceContext from '../../Context/DeviceContext';
import star from '../../assets/images/star.svg';
import arrowLeft from '../../assets/images/arrow-left.svg';
import './MovieModal.scss';

const MovieModal = memo(({movie: {title, id, rating, synopsis, largeimage, runtime}, onCancel}) => {
  const divRef = useRef();
  useEffect(() => {
    if (divRef.current) {
      divRef.current.innerHTML = synopsis;
    }
  }, [synopsis]);

  const {isMobile} = useContext(DeviceContext);
  
  return (
    <div className={classNames('movie-modal', {'mobile-view': isMobile})}>
      <div className='image-container'>
        <img src={largeimage} alt={title} className='movie-image'></img>
      </div>
      <div className='details-container'>
        <div className='title'>
          {title}
        </div>
        <div className='runtime'>
          {runtime}
        </div>
        <div className='rating'>
          <img src={star} alt="rating" className='movie-rating-star'/>
          {rating || 5}/10
        </div>
        <div className='synopsis' ref={divRef}>
        </div>
        <div className='close-button' onClick={onCancel}>
          <div className='button-arrow'>
            <img src={arrowLeft} alt='Back to list' className='arrow-left-image'></img>
          </div>
          <div className='button-text'>Back to list</div>
      </div>
      </div>
    </div>
  );
}, (prevProps, currentProps) => prevProps.id === currentProps.id);

export default MovieModal;