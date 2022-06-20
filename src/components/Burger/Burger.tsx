import React from "react";
import  './Burger.css';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export interface ingredientProperties {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
    [index: string]: number;
  }

  interface Props {
    ingredients: ingredientProperties;
  }

const burger = (props: Props) => {
    let transformedIngredients:  JSX.Element[] | JSX.Element = Object.keys(
       props.ingredients
    )
       .map((ingKey) => {
           return [...Array(props.ingredients[ingKey])].map((_, i) => {
               return <BurgerIngredient key={ingKey + i} type={ingKey} />;
            });
        })
       .reduce((arr, el) => {
           return arr.concat(el);
          }, []);
      
       if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
        } 
    return (
        <div className="Burger">
          <BurgerIngredient type="bread-top" /> {transformedIngredients} 

          <BurgerIngredient type="bacon" />
          <BurgerIngredient type="cheese" />
          <BurgerIngredient type="salad" />
          <BurgerIngredient type="meat" />
          <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;