/*Actions Examples*/

export const ADD = () => ({
  type: 'TEST',
});

/*import axios from 'axios';

export const LoadMovies = searchIN => {
  return dispatch => {
    return axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=b0b093b990f91026543b2f9012e230b0&query=${searchIN}`)
      .then(response => {
        console.log(response);
        dispatch(ShowMovies(response.data.results));
      })
      .catch(err => {
        dispatch(err_handle(err));
      });
  };
};

export const ShowMovies = movies => ({
  type: 'LOAD_MOVIES',
  Movies: movies,
});

export const err_handle = err => {
  return {
    type: 'err_f',
  };
};

export const clearList = () => {
  return dispatch => {
    dispatch({ type: 'CLEAR' });
  };
};

export const isHome = () => {
  return dispatch => {
    dispatch({ type: 'is_HOME' });
  };
};
export const searchQ = searchq => {
  return dispatch => {
    dispatch({ type: 'search_q', text: searchq });
  };
};
*/