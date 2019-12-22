export default function(state={},action){
    switch(action.type){
        case 'FOOD_RECIPES_LIST':
            return {...state,recipes:action.json,loading:false}
        case 'GET_FOOD_RECIPES_LIST':
            return {...state,loading:true}
        case 'FOOD_RECIPE_DETAILS':
            return {...state,recipe:action.json,loading:false}
        case 'GET_FOOD_RECIPE_DETAILS':
            return {...state,loading:true}
        default:
            return state;
    }
}