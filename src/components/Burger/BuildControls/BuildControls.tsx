import React, { MouseEventHandler } from 'react';
import './BuildControls.css';
import BuildControl from  './BuildContol/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'}
];

interface Props {
    ingredientRemoved: (type: string) => void;
    ingredientAdded: (type: string) => void;
    disabled: { [key: string]: any };
    price: number;
    purchasable: boolean;
    ordered: MouseEventHandler;
  }

const buildControls = (props: Props) => (
    <div className='BuildControls'>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]} children={undefined} />
        ))}
        <button className='OrderButton' 
                disabled={!props.purchasable}
                onClick={props.ordered}>ORDER NOW</button>
    </div>
);

export default buildControls;