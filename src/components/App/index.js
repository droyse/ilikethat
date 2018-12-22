import React, { Component } from 'react'
import './index.css'
import Body from './Body';
import SideDrawer from './SideDrawer';
import Toolbar from './Toolbar';
import Backdrop from './Backdrop';

import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faStar, faStarHalf, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'


library.add( faStar, faStarHalf, faStarHalfAlt, farFaStar )

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false})
  }

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
       backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}   
        <main style={{marginTop: '64px'}}>
          <Body />
        </main>
      </div>
    );
  }
}

export default App
