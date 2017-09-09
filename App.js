import React, { Component } from 'react';
import { Container } from 'native-base';
import { Router, Scene } from 'react-native-router-flux';

// Custom Component Imports
import AppFooter from './app/components/AppFooter';
import AppHeader from './app/components/AppHeader';
import ViewAbout from './app/components/ViewAbout';
import ViewCuisine from './app/components/ViewCuisine';
import ViewSelect from './app/components/ViewSelect';
import ViewSwipe from './app/components/ViewSwipe';


export default class App extends Component {
  render() {
    return (

      <Container>

        <AppHeader />


        <Router>
          <Scene key="root">
            <Scene key="about"
              component={ViewAbout}
              title="About"
              tabs={true}
              initial
            />
            <Scene
              key="cuisine"
              component={ViewCuisine}
              title="Cuisine"
              tabs={true}
            />
            <Scene
              key="swipe"
              component={ViewSwipe}
              title="Swipe"
              tabs={true}
            />
            <Scene
              key="select"
              component={ViewSelect}
              title="Select"
              tabs={true}
            />
          </Scene>
        </Router>


        <AppFooter />

      </Container>

    );
  }
}