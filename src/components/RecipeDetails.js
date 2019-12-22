import React from 'react';
import FullRecipe from '../containers/FullRecipe';

const RecipeDetails = (props)=>{
    return(
        <div> 
            <FullRecipe pathId={props.match.params.id}/>
        </div>
    )
}

export default RecipeDetails;