import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import RecipeThumbnail from '../components/RecipeThumbnail';

class RecipeList extends Component {
    componentDidMount(){
        this.props.dispatch(actions.getRecipes())
    }
    renderRecipes = ({recipes})=>{
        if(recipes){
            console.log(recipes);
            return recipes.map(recipe =>{
                return(
                    <RecipeThumbnail recipe={recipe} />
                )
            });
        }
    }
    render(){
        
        return(
            <div className="row">

            {this.renderRecipes(this.props.recipes)}</div>
        )
    }
}
function mapStateToProps(state,props){
    return{
        recipes:state.recipes
    }
}

RecipeList.protoType ={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(RecipeList);