import React, {Component} from 'react';
import RecipeList from '../containers/recipes-list';
import RecipeDetail from '../containers/recipe-detail';

export default class App extends Component {
  
    render(){
        return (
           <div>
               <div className="row">
               <div className="bg-image">
                   <h2 id="title">Recipes</h2>
               </div>
               </div>
               <div className="row space-between"></div>
            <div className="row col-md-12">
                <div className="col-md-6 recipe-list">             
                <RecipeList/>
                    </div>
                    <div className="col-md-6 recipe-details">
                <RecipeDetail/>
                </div>
            </div>
            </div>
        );
    }
}
