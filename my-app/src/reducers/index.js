import { combineReducers } from 'redux';
import RatingReducer from "./RatingReducer";
const rootReducer = combineReducers({
      ratingSeries: RatingReducer

});

export default rootReducer;