import {combineReducers} from 'redux';
import recipes from './recipe_reducer';

const RootReducer = combineReducers({
    recipes
});

export default RootReducer;