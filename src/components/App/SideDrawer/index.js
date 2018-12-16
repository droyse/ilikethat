import React from 'react'
import './index.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><a href="/">Page 1</a></li>
                <li><a href="/">Page 2</a></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;