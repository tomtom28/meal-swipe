import React, { Component } from 'react';
import { Container } from 'native-base';


// Custom Component Imports
import AppFooter from './app/components/AppFooter';
import AppHeader from './app/components/AppHeader';
import ViewAbout from './app/components/ViewAbout';
import ViewCuisine from './app/components/ViewCuisine';
import ViewSelect from './app/components/ViewSelect';
import ViewSwipe from './app/components/ViewSwipe';


export default class App extends Component {

  // Track which Component is selected
  constructor(props) {
    super(props);
    this.state = {
      activeView: "about",
      apiResponse: {}
    };
  }


  // Change state (via footer selection)
  _toggledFooter(selection) {
    this.setState({activeView: selection}); 
  }


  // Determine which Component to render
  _renderSelectedView() {
    let selectedView;

    if (this.state.activeView == "select") {
      selectedView = <ViewSelect />;
    }
    else if (this.state.activeView == "cuisine") {
      selectedView = <ViewCuisine />;
    }
    else if (this.state.activeView == "swipe") {
      selectedView = <ViewSwipe />;
    }
    else {
      selectedView = <ViewAbout />;
    }
    return selectedView;
  }






  render() {
    return (

      <Container>

        <AppHeader />


         <Container>
          { this._renderSelectedView() }
         </Container>


        <AppFooter 
          _toggledFooter={this._toggledFooter.bind(this)}
        />

      </Container>

    );
  }
}