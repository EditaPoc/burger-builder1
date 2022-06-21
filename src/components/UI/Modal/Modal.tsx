import React, { MouseEventHandler } from 'react';
import './Modal.css';
import Aux from "../../../hoc/Auxilary/Auxilary";
import Backdrop from '../Backdrop/Backdrop';

interface Props {
    children: React.ReactNode;
    show: boolean;
    modalClosed: MouseEventHandler;
}
const modal = (props: Props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.modalClosed} />
        <div className='Modal'
            style={{transform: props.show ? 'translateY(0)' : 'translateY(-100)',
                     opacity: props.show ? '1' : '0'
            }} >
            {props.children}
        </div>
    </Aux>
);

export default modal;