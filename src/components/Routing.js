import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import App from './App';
import RecipeDetails from './RecipeDetails';

const Routing = ()=>{
    return(<BrowserRouter>
        <Route exact path="/" component={App} />
        <Route exact path="/recipe/:id" component={RecipeDetails} />
    </BrowserRouter>
    );
}
export default Routing;