import {mockVideos} from '../mockData'

export const GLOBAL_ACTIONS = {
  SWITCH_THEME: 'SWITCH_THEME',
  UPDATE_SEARCH_VALUE: 'UPDATE_SEARCH_VALUE',
  SELECT_VIDEO: 'SELECT_VIDEO',

  GET_VIDEOS_REQUEST: 'GET_VIDEOS_REQUEST',
  GET_VIDEOS_SUCCESS: 'GET_VIDEOS_SUCCESS',
  GET_VIDEOS_FAILURE: 'GET_VIDEOS_FAILURE',
};

export const switchTheme = (dispatch, themeValue) => {
  dispatch({ type: GLOBAL_ACTIONS.SWITCH_THEME, themeValue });
};

// search function action
export const onChangeSearch = (dispatch, searchValue) => {
  dispatch({ type: GLOBAL_ACTIONS.UPDATE_SEARCH_VALUE, searchValue });
};

export const selectVideo = (dispatch, videoSelected) => {
  dispatch({ type: GLOBAL_ACTIONS.SELECT_VIDEO, videoSelected });
};

// fecth function
export const fetchVideos = async (dispatch, searchValue, select) => {
  dispatch({ type: GLOBAL_ACTIONS.GET_VIDEOS_REQUEST, searchValue });
  try {
    // const response = await fetch(
    //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchValue}&type=video&key=${process.env.REACT_APP_API_KEY}`,
    //   {
    //     method: 'get',
    //     headers: { 'Content-Type': 'application/json' },
    //   }
    // );
    //const videoList = await response.json();
    const videoList = mockVideos;
    console.log('FETCHING');
    dispatch({ type: GLOBAL_ACTIONS.GET_VIDEOS_SUCCESS, videoList });
    
    if (select) {
      const videoSelected = videoList.items[0];
      dispatch({ type: GLOBAL_ACTIONS.SELECT_VIDEO, videoSelected });
    }
  } catch (error) {
    dispatch({ type: GLOBAL_ACTIONS.GET_VIDEOS_FAILURE, error });
  }
};