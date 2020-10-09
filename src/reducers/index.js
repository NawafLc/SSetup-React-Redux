let initState = {
counter:0,
};

const rootReducer = (state = initState, actions) => {
  switch (actions.type) {
    case 'TEST':
      return { ...state, counter: state.counter+=1};
    default:
      return state;
  }
};


export default rootReducer;
/*let initState = {

};

const moviesReducer = (state = initState, actions) => {
  switch (actions.type) {
    case 'LOAD_MOVIES':
      return { ...state, Movies: actions.Movies, is_deli: true };
    case 'err_f':
      return { ...state, Movies: [], is_deli: false };
    case 'CLEAR':
      return { ...state, Movies: [], is_deli: false };
    case 'is_HOME':
      return { ...state, Movies: [], is_deli: false, is_home: false };
    case 'search_q':
      return {
        ...state,
        Search_in: actions.text,
      };
    default:
      return state;
  }
};

export default moviesReducer;
*/