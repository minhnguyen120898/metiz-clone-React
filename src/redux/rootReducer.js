import {combineReducers} from 'redux';
import moviesReducer from './reducers/adminMovieReducer';
import adminReducer from './reducers/adminUserReducer';
import loginReducer from './reducers/loginReducer';
import newsReducer from './reducers/newsReducer';
import productReducer from './reducers/productReducer';
import registerReducer from './reducers/registerReducer';
import sliderReducer from './reducers/sliderReducer';

const rootReducer = combineReducers({
    slider : sliderReducer,
    product : productReducer,
    news : newsReducer,
    login : loginReducer,
    register : registerReducer,
    admin : adminReducer,
    adminMovie : moviesReducer,
})

export default rootReducer;