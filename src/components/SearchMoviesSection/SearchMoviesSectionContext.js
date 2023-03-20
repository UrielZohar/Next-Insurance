import {createContext} from 'react';

const MoviesContext = createContext({
  movies: [],
  criterias: {},
  setCriterias: () => {},
});

export default MoviesContext;