import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import { channelDetailReducer } from "./reducers/channel.reducer";
import { homeVideosReducer } from "./reducers/video.reducer";
import { selectedVideoReducer } from "./reducers/video.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectedVideo:selectedVideoReducer,
  channelDetails:channelDetailReducer
});

const store = createStore(
  rootReducer,
 
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
