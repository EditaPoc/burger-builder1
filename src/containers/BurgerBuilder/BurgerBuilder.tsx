import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger, { ingredientProperties } from '../../components/Burger/Burger';

interface State {
    ingredients: ingredientProperties;
  }

class BurgerBuilder extends Component {
  state: State = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    }
  }
  render () {
    return (
        <Aux>
            <Burger ingredients={this.state.ingredients}  />
            <div>Build controls</div>
        </Aux>
    );      
  };
}
   


export default BurgerBuilder;

