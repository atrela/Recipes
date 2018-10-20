import  {combineReducers} from 'redux';
import RecipiesReducer from './reducer_recipes'
import ActiveRecipe from './reducer_active_recipe'

const rootReducer = combineReducers({
recipes: RecipiesReducer,
activeRecipe: ActiveRecipe
    }
)

export default rootReducer;
