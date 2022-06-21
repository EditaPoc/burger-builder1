import React from 'react';

interface Props {
    drawerToggleClicked: React.MouseEventHandler;
  }

const toolbar = (props: Props) => (
    <header>
        <div>MENU</div>
        <div>LOGO</div>
        <nav>
            ...
        </nav>
    </header>
);

export default toolbar;