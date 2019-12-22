import React from 'react';
import './RecipeThumbnail.css';
import {Link} from 'react-router-dom';

const RecipeThumbnail = ({recipe})=>{
    return(
        <div key={recipe.id} className="col-sm-6 col-md-4">
        <div  className="thumbnail">
            <img style={{width:'100%',height:'200px'}} src={recipe.imageURL}/>
            <div className="caption">
                <h3 className="recipename">{recipe.name}</h3>
                <p><Link to={`/recipe/${recipe.id}`} className="btn btn-primary" role="button">Detailed Recipe</Link></p>
            </div>
        </div>
        </div>
    )
}  
export default RecipeThumbnail;
