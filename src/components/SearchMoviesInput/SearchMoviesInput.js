import { useContext, useCallback } from 'react';
import { Input } from 'antd';
import classnames from 'classnames';
import MoviesContext from '../SearchMoviesSection/SearchMoviesSectionContext';
import SearchCriterias from './components/SearchCriterias/SearchCriterias';
import './SearchMoviesInput.scss';
const { Search } = Input;

const SearchMoviesInput = ({className}) => {
  const { criterias, setCriterias } = useContext(MoviesContext);
  const { title } = criterias;
  const onCriteriasChange = useCallback(keyVal => {
    setCriterias({
      ...criterias,
      ...keyVal,
    });
  }, [criterias, setCriterias]);
  const onTitleChange = useCallback(title => {
    onCriteriasChange({title});
  }, [onCriteriasChange]);
  const onClear = useCallback(() => {
    setCriterias({});
  }, [setCriterias]);
  return (
    <div className={classnames('search-movies-input', className)}>
      <Search
        placeholder="BATMAN"
        allowClear
        enterButton
        size='large'
        onSearch={onTitleChange}
      />
      <SearchCriterias 
        criterias={criterias} 
        onCriteriasChange={onCriteriasChange}
        onClear={onClear}
      />
    </div>
  );
}

export default SearchMoviesInput;