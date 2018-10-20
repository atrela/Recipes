import React, {Component} from 'react';
import {connect} from 'react-redux';

 class RecipeDetail extends Component {

    renderIngredients(){
        return this.props.recipe.ingredients.map((ingredient)=> {
            return (
                <li key={ingredient}>{ingredient}</li>
            )
        })
    }

    render () {
        if(!this.props.recipe) {
            return (
                <h3>No recipe selected</h3>
            );
        }
        return (
            <div>
                <h3>Recipe details:</h3>
                <br/>
                <h2>{this.props.recipe.name}</h2>
                <h5>Ingredients:</h5>
                <ul className="col-md-12 ingredient-list">
            {this.renderIngredients()}
            </ul>
                <div>{this.props.recipe.description}</div>
            </div>
        );
    }  
}
function mapStateToProps(state) {
    return {
        recipe: state.activeRecipe
    };
}
export default connect(mapStateToProps)(RecipeDetail);