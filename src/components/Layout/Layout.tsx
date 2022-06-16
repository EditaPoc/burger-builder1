import React, { Component } from "react";
import { classicNameResolver } from "typescript";
import Aux from "../../hoc/Auxiliary/Auxiliary";


// class Layout extends Component {
// render() {
//     return (
//         <Aux>
//             <div className="App">Toolbar, SideDrawer, Backdrop</div>
//             <main>
//                 {this.props}
//             </main>
//         </Aux>
//     );
// }
// }
const layout = ( props: any ) => (
    <Aux>
        <div className="Content">Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;