import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';
import './FullRecipe.css';

class FullRecipe extends Component {
    componentDidMount(){
        this.props.dispatch(actions.getRecipeDetails(this.props.pathId))
    }
    renderRecipeDetails = ({recipe})=>{
        const renderList = (list)=>{
            return (list).map((item,index) => {
                return (typeof item === 'object')?(
                        <li key={item.name}>
                            <div>{item.quantity}</div>
                            <div>{item.type}</div>
                            <div>{item.name}</div>
                        </li>
                    ):(<li key={item}>{item}</li>)

            })
        }
        if(recipe){
            console.log(recipe);
            return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-offset-1 col-sm-10">
                        <div className="jumbotron">
                    <div className="center">
                    <h1 >{recipe.name}</h1>
                    <img style={{height:'500px',width:'100%'}}src={recipe.imageURL} alt="image url" />
                    <h2>Ingredients</h2>
                    <ul>
                        {renderList(recipe.ingredients)}
                    </ul>
                    <h2>Steps</h2>
                    <ul>
                        {renderList(recipe.steps)}
                    </ul>
                    </div>

            </div>
                    </div>

                </div>

            </div>
)
        }
    }
    render(){
        
        return(
            <div className="row">
            {this.renderRecipeDetails(this.props.recipe)}</div>
        )
    }
}
function mapStateToProps(state,props){
    return{
        recipe:state.recipes
    }
}

FullRecipe.protoType ={
    dispatch:PropTypes.func
}

export default connect(mapStateToProps)(FullRecipe);