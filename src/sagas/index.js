import {put,takeLatest,all,takeEvery} from 'redux-saga/effects';

const url="http://localhost:8900/recipes";

function* fetchFoodRecipeList(){
    const output = yield fetch(url,{method:'GET'})
                        .then((res)=>res.json())
    yield put({
        type:'FOOD_RECIPES_LIST',
        json:output
    })
}

function* fetchFoodRecipeDetails({id}){
        const output = yield fetch(`${url}/${id}`,{method:'GET'})
                            .then((res)=>res.json())
        yield put({
            type:'FOOD_RECIPE_DETAILS',
            json:output
        });
}
function* actionWatcherForRecipes(){
    yield takeLatest('GET_FOOD_RECIPES_LIST',fetchFoodRecipeList);
}

export default function* rootSaga(){
    yield takeEvery("GET_FOOD_RECIPE_DETAILS",fetchFoodRecipeDetails)
    yield all([
        actionWatcherForRecipes(),
    ])
}