import React, { ReactNode } from "react";

export interface Props {
  children: React.ReactNode;
}

const aux: React.FC<Props> = (props) => {
    return <>{props.children}</>;
};
export default aux;
