import React from 'react';
import Recipes from './Recipes'

const App = ()=>{
    return(
        <div>
            <nav className="navbar navbar-inverse">
            <h3 style={{color:"white",textAlign:"center"}}className="container">
                Food Blog
            </h3>
            </nav> 
            <Recipes /> 
        </div>
          
        
    )
}

export default App;