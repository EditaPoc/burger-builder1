import React, { Component } from "react";
import Aux from "../../hoc/Auxiliary/Auxiliary";
import Burger, { ingredientProperties } from '../../components/Burger/Burger';

// interface State {
//     ingredients: ingredientProperties;
//   }

  interface Props {
    ingredients: ingredientProperties;
  }
  

class BurgerBuilder extends Component {
    render () {
        return (
            <Aux>
                <Burger ingredients={this.props }  />
                <div>Build controls</div>
            </Aux>
        );      
    }
}

export default BurgerBuilder;