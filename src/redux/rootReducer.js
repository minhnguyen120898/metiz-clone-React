import {combineReducers} from 'redux';
import newsReducer from './reducers/newsReducer';
import productReducer from './reducers/productReducer';
import sliderReducer from './reducers/sliderReducer';

const rootReducer = combineReducers({
    slider : sliderReducer,
    product : productReducer,
    news : newsReducer,
})

export default rootReducer;