import React from 'react'
import DrawerToggleButton from './DrawerToggleButton'
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
                    <li><a href="/">Page 1</a></li>
                    <li><a href="/">Page 2</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default Toolbar;