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
  render() {
    return (
      <Container>


        <AppHeader />



        <Container>
          {/* <ViewCuisine /> */}
          {/* <ViewAbout /> */}
          <ViewSwipe />
          {/* <ViewSelect /> */}
        </Container>




        <AppFooter />


      </Container>
    );
  }
}