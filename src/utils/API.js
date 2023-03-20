import {queryParamsObjectToString} from './utils';

const API = class API {
  static root = '';
  static get = (path, configuration = {type:'json'}, params = '') => {
    const {queryParams = {}} = configuration;
    return fetch(`${API.root}/${path}/${params}?${queryParamsObjectToString(queryParams)}`).then(response => response.json())
      .catch(err => alert(`Something went wrong: ${err}`));
  }
}

export default API;
