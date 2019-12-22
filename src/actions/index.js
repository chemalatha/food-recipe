export const getRecipes = ()=>({
    type:'GET_FOOD_RECIPES_LIST'
});
export const getRecipeDetails = (id)=>({
    type:'GET_FOOD_RECIPE_DETAILS',
    id
});