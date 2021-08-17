import { GLOBAL_ACTIONS } from './globalActions';

const localTheme = window.localStorage.getItem('theme');

export const initialState = {
  fetchingVideo: false,
  videoList: [],
  error: false,

  searchValue: 'Wizeline',
  themeValue: localTheme || 'light',
  videoSelected: null,
};

export function globalReducer(state, action) {
  switch (action.type) {
    case GLOBAL_ACTIONS.SWITCH_THEME: {
      return { ...state, themeValue: action.themeValue };
    }
    case GLOBAL_ACTIONS.UPDATE_SEARCH_VALUE: {
      return { ...state, searchValue: action.searchValue };
    }
    case GLOBAL_ACTIONS.SELECT_VIDEO: {
      return { ...state, videoSelected: action.videoSelected };
    }

    // TODO videos request  i need a dispatch
    case GLOBAL_ACTIONS.GET_VIDEOS_REQUEST: {
      return { ...state, fetchingVideo: true };
    }
    case GLOBAL_ACTIONS.GET_VIDEOS_SUCCESS: {
      return { ...state, fetchingVideo: false, videoList: action.videoList };
    }
    case GLOBAL_ACTIONS.GET_VIDEOS_FAILURE: {
      return { ...state, fetchingVideo: false, error: true };
    }
    default:
      throw new Error('Unkown action');
  }
}
