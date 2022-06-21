import React from "react";
import "./Layout.css";
import Aux from "../../hoc/Auxilary/Auxilary";

interface Props {
    children: React.ReactNode;
}

const layout = (props: Props ) => (
    <Aux>
        <div className="Content">Toolbar, SideDrawer, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;