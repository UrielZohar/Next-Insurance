
import { useCallback } from 'react';
import { Select, Slider } from 'antd';
import { CloseCircleFilled } from '@ant-design/icons';
import {getAll50LastYears} from '../../../../utils/utils';
import './SearchCriterias.scss';
const last50Years = getAll50LastYears();

const SearchCriterias = ({criterias: {minRunTimeMinutes, minYear, minRating}, onCriteriasChange, onClear}) => {
  const onMinYearChange = useCallback(_minYear => {
    onCriteriasChange({
      minYear: _minYear,
    })
  }, [onCriteriasChange]);
  const onMinRatingChange = useCallback(_minRating => {
    onCriteriasChange({
      minRating: _minRating,
    })
  }, [onCriteriasChange]);
  const onMaxLength = useCallback(_maxLength => {
    onCriteriasChange({
      maxRunTimeMinutes: _maxLength,
    })
  }, [onCriteriasChange]);
  return (
    <div className='search-criterias'>
      <Select
        placeholder='From Year:'
        className='min-year'
        optionFilterProp='children'
        value={minYear}
        onChange={onMinYearChange}
        allowClear
        options={[
          ...(last50Years.map(year => ({
            value: year,
            label: year,
          })))
        ]}
      />
      <Select
        placeholder='Min Rating:'
        className='min-rating'
        optionFilterProp='children'
        onChange={onMinRatingChange}
        allowClear
        value={minRating}
        options={[
          {
            value: 6,
            label: 6,
          },
          {
            value: 7,
            label: 7,
          },
          {
            value: 8,
            label: 8,
          },
          {
            value: 9,
            label: 9,
          },
          {
            value: 10,
            label: 10,
          },
        ]}
      />
      <label className='max-length-label'>Max length (mins):</label>
      <Slider
        className='max-length'
        min={30} 
        max={150} 
        allowClear
        value={minRunTimeMinutes}
        onAfterChange={onMaxLength}
      />
      <CloseCircleFilled 
        className='clear-filter'
        alt='Clear Filters' 
        onClick={onClear}
      />
    </div>
  );
};

export default SearchCriterias;