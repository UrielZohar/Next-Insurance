import {useEffect, useState, useCallback} from 'react';
import API from '../../utils/API';
import SearchMoviesInput from '../SearchMoviesInput/SearchMoviesInput';
import MovieCard from '../MovieCard/MovieCard';
import MovieModal from '../MovieModal/MovieModal';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import MoviesContext from './SearchMoviesSectionContext';
import './SearchMoviesSection.scss';

const SearchMoviesSection = () => {
  const [movies, setMovies] = useState([]);
  const [criterias, setCriterias] = useState({});
  const [movieInModal, setMovieInModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchMovies = useCallback((criteriasQueryParams = {}) => {
    setIsLoading(true);
    API.get('movies', {queryParams: criteriasQueryParams}).then(movies => {
      setMovies(movies);
      setIsLoading(false);
    })
    .catch(() => setIsLoading(false));
  }, [setMovies, setIsLoading]);

  useEffect(() => searchMovies(criterias), [searchMovies, criterias]);
  const onOpenMovieModal = useCallback(movieId => {
    setIsLoading(true);
    API.get('movies', {}, movieId).then(movie => {
      setIsLoading(false);
      setMovieInModal(movie);
    })
    .catch(() => setIsLoading(false));
  }, [setIsLoading, setMovieInModal]);

  const onCancelMovieModal = useCallback(() => {
    setMovieInModal(null);
  }, [setMovieInModal]);

  return (
    <MoviesContext.Provider value={{movies, criterias, setCriterias}}>
      <section className="search-movies-section">
        <div className='search-movies-section-title'>Explore your next Movies and tv shows</div>
        <div>
          <SearchMoviesInput/>
        </div>
        <div className='search-results'>
          {
            movies.map(movie => 
              <div className='movie-card-grid-item' key={movie.id}>
                <MovieCard movie={movie} onReadMore={onOpenMovieModal}/>
              </div>
            )
          }
        </div>
        {
          movieInModal && 
          <Modal open={movieInModal} footer={null} onCancel={onCancelMovieModal}>
            <MovieModal movie={movieInModal}/>
          </Modal>
        }
        {isLoading && <Spinner />}
      </section>
    </MoviesContext.Provider>
  );
}

export default SearchMoviesSection;