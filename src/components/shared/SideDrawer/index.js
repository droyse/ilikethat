import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open'
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <li><Link to="drinks">Drinks</Link></li>
                <li><Link to="drink">Drink</Link></li>
            </ul>
        </nav>
    );
};

export default SideDrawer;