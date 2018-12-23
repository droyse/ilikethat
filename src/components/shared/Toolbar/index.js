import React from 'react'
import DrawerToggleButton from './DrawerToggleButton'
import { Link } from 'react-router-dom'
import './index.css'

const Toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.drawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">ilikethat</a></div>
            <div className="spacer"></div>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><Link to="drinks">Drinks</Link></li>
                    <li><Link to="drink">Drink</Link></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;