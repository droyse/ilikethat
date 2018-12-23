import React, { Component } from 'react'
import { BrowserRouter, Route }  from 'react-router-dom'


// Body components
import './index.css'
import Drinks from './Body/Drinks'
import Drink from './Body/Drink'

// Shared components
import SideDrawer from '../shared/SideDrawer';
import Toolbar from '../shared/Toolbar';
import Backdrop from '../shared/Backdrop';

// Font Awesome icons used within app
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
      <BrowserRouter>
        <div style={{height: '100%'}}>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen}/>
          {backdrop}   
          <main style={{marginTop: '64px'}}>
            <Route exact path='/' component={Drinks} />
            <Route path='/drinks' component={Drinks} />
            <Route path='/drink' component={Drink} />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App
