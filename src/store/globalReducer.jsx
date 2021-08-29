import { GLOBAL_ACTIONS } from './globalActions';

import { THEME_STORAGE, VIDEOS_STORAGE } from '../utils/constants';

const localTheme = window.localStorage.getItem(THEME_STORAGE);

const favorites = window.localStorage.getItem(VIDEOS_STORAGE)
  ? JSON.parse(window.localStorage.getItem(VIDEOS_STORAGE))
  : [];

//const localTheme = window.localStorage.getItem('theme');

export const initialState = {
  fetchingVideo: false,
  videoList: [],
  error: false,

  searchValue: 'wizeline',
  themeValue: localTheme || 'light',
  videoSelected: null,

  favoriteVideos: favorites,
  showModalLogin: false,

  fetchingAuth: false,
  user: null,
  errorAuth: null,
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

    case GLOBAL_ACTIONS.GET_VIDEOS_REQUEST: {
      return { ...state, fetchingVideo: true };
    }
    case GLOBAL_ACTIONS.GET_VIDEOS_SUCCESS: {
      return { ...state, fetchingVideo: false, videoList: action.videoList };
    }
    case GLOBAL_ACTIONS.GET_VIDEOS_FAILURE: {
      return { ...state, fetchingVideo: false, error: true };
    }

    case GLOBAL_ACTIONS.LOGIN_REQUEST:
      return { ...state, fetchingAuth: true };
    case GLOBAL_ACTIONS.LOGIN_SUCCESS:
      return { ...state, fetchingAuth: false, user: action.user, errorAuth: null };
    case GLOBAL_ACTIONS.LOGIN_FAILURE:
      return { ...state, fetchingAuth: false, errorAuth: action.errorAuth, user: null };

    case GLOBAL_ACTIONS.LOGOUT_REQUEST:
      return { ...state, fetchingAuth: true };
    case GLOBAL_ACTIONS.LOGOUT_SUCCESS:
      return { ...state, fetchingAuth: false, user: null };
    case GLOBAL_ACTIONS.LOGOUT_FAILURE:
      return { ...state, fetchingAuth: false, errorAuth: action.errorAuth };

    case GLOBAL_ACTIONS.ADD_FAVORITE_VIDEO:
      return { ...state, favoriteVideos: action.favoriteVideos };
      
    case GLOBAL_ACTIONS.REMOVE_FAVORITE_VIDEO:
      return { ...state, favoriteVideos: action.favoriteVideos };

    case GLOBAL_ACTIONS.SHOW_MODAL:
        return { ...state, showModalLogin: action.showModalLogin };
    default:
      throw new Error('Unkown action');
  }
}
