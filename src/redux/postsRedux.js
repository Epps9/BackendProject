import Axios from 'axios';


/* selectors */
export const getAll = ({posts}) => posts.data;
export const getAllPublished = ({posts}) => posts.data.filter(item => item.status === 'published');
export const getOneById = ({posts}) => posts.data.filter(item => item.id === posts.data.id);

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;


/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchPublished = () => {
  return (dispatch, getState, posts) => {
    if (posts.data === [] && posts.loading.data === false) {
    dispatch(fetchStarted())};

    Axios
      .get('http://localhost:8000/api/posts')
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};


export const fetchOne = (id) => {
  return (dispatch, getState, posts) => {
    if (posts.data.id === id) {
    dispatch(fetchStarted())};

    Axios
      .get('http://localhost:8000/api/:id')
      .then(res => {
        dispatch(fetchSuccess(res.data.id));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
