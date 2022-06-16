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
    let selectedIngredients: JSX.Element[] | JSX.Element = Object.keys(
        props.ingredients
    )
        .map((ingredKey) => {
            return [...Array(props.ingredients[ingredKey])].map((_, i) => {
                return <BurgerIngredient key={ingredKey + i} type={ingredKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
          }, []);
      
        if (selectedIngredients.length === 0) {
          selectedIngredients = <p>Please start adding ingredients!</p>;
        }
    return (
        <div className="Burger">
          <BurgerIngredient type="bread-top" />  {selectedIngredients}

          <BurgerIngredient type="bacon" />
          <BurgerIngredient type="cheese" />
          <BurgerIngredient type="salad" />
          <BurgerIngredient type="meat" />
          <BurgerIngredient type="cheese" />
          <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;