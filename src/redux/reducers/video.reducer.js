import {
  HOME_VIDEOS_FAIL,
  HOME_VIDEOS_REQUEST,
  HOME_VIDEOS_SUCCESS,
  SELECTED_VIDEOS_FAIL,
  SELECTED_VIDEOS_REQUEST,
  SELECTED_VIDEOS_SUCCESS,
} from "../actionType";

export const homeVideosReducer = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
  },
  action
) => {
  const { type, payload } = action;
  
  switch (type) {
    case HOME_VIDEOS_SUCCESS:
      return {
        ...state,
        videos:  state.activeCategory === payload.category ? [...state.videos,...payload.videos ] : payload.videos ,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory:payload.category
      
      };

    case HOME_VIDEOS_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
      };

    case HOME_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
  
};

export const selectedVideoReducer = (
  state = {
     loading: true,
     video: null,
  },
  action
) => {
  const { payload, type } = action

  switch (type) {
     case SELECTED_VIDEOS_REQUEST:
        return {
           ...state,
           loading: true,
        }
     case SELECTED_VIDEOS_SUCCESS:
        return {
           ...state,
           video: payload,
           loading: false,
        }
     case SELECTED_VIDEOS_FAIL:
        return {
           ...state,
           video: null,
           loading: false,
           error: payload,
        }

     default:
        return state
  }
}
