import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger, { ingredientProperties } from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

interface State {
    ingredients: ingredientProperties;
    totalPrice: number
  }

  export type Disabled = {
    [key: string]: number | boolean;
  };

  const INGREDIENT_PRICES: ingredientProperties = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
  };

class BurgerBuilder extends Component {
  state: State = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4
  }

  addIngredientHandler = (type: string): void => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});


  }

  removeIngredientHandler = (type: string): void => {
    const oldCount = this.state.ingredients[type];

    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount -1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceDeduction;
    this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

  }

  render () {
    const disabledInfo: Disabled = {
      ...this.state. ingredients
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo [key] <= 0;
    }
    return (
        <Aux>
            <Burger ingredients={this.state.ingredients}  />
            <BuildControls 
              ingredientAdded={this.addIngredientHandler} 
              ingredientRemoved={this.removeIngredientHandler}
              disabled={disabledInfo}
              price={this.state.totalPrice} />
        </Aux>
    );      
  };
}
   


export default BurgerBuilder;

