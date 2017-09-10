import React, { Component } from 'react';
import { Container } from 'native-base';
import axios from 'axios';


// Custom Component Imports
import AppFooter from './app/components/AppFooter';
import AppHeader from './app/components/AppHeader';
import ViewAbout from './app/components/ViewAbout';
import ViewCuisine from './app/components/ViewCuisine';
import ViewSelect from './app/components/ViewSelect';
import ViewSwipe from './app/components/ViewSwipe';


// Gobal Variables
const GOOGLE_API_KEY = "";
let LOCATION = "40.730604,-73.9937027"; //default location (Facebook NYC)
const RADIUS  = 5000; // radius in meters (5k is 3.1 miles)
const TYPES = "food,restaurant,bar";


// Get User Location
navigator.geolocation.getCurrentPosition(function(response) {
  let lat = response.coords.latitude;
  let lng = response.coords.longitude;
  LOCATION = lat + "," + lng;
});


// App Component
export default class App extends Component {


  // Track which Component is selected
  constructor(props) {
    super(props);
    this.state = {
      GOOGLE_API_KEY: GOOGLE_API_KEY,
      activeView: "about",
      listOfPlaces: [
        {
          name: "Please Submit Your Cuisines!",
          rating: 0.0,
          photoRef: null,
          address: "This is not a real location."
        }

      ]
    };
  }


  // Change state (via footer selection)
  _toggleView(selection) {
    this.setState({activeView: selection});
  }


  // Search Google API (using cuisine submission)
  _searchSelectedCuisines(submission) {

    // Need to hold on to "this"
    let appComponent = this;

    axios.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?', {
      params: {
        location: LOCATION,
        radius: RADIUS,
        types: TYPES + "," + submission,
        name: submission,
        key: GOOGLE_API_KEY,
      }
    })
    .then(function (response) {

      // Create Array of Cards Objects
      let listOfPlaces = [];

      // Collect list of locations
      let placesArray = response.data.results;

      // Determine if any places were found
      if (placesArray.length == 0) {

        console.log("No places found");

        let currentPlaceObj = {
            name: "Sorry. No places were found!",
            rating: 0.0,
            photoRef: "n/a",
            address: "Please refine your cuisine selection."
        };

        listOfPlaces.push(currentPlaceObj);

      }
      else {

        // Iterate over response
        for (let i=0; i<placesArray.length; i++) {

          // Get current location object
          let currentPlace = placesArray[i];

          // Get current location's attributes
          let placeName = currentPlace.name;
          let placeRating = currentPlace.rating;
          if (placeRating == undefined) {
            placeRating = "No"
          }
          let placePhotoReference;
          if (!currentPlace.photos) {
            placePhotoReference = "none";
          }
          else {
            placePhotoReference = currentPlace.photos[0].photo_reference;
          }
          let placeAddress = currentPlace.vicinity;

          // Push current place object to array
          let currentPlaceObj = {
            name: placeName,
            rating: placeRating,
            photoRef: placePhotoReference,
            address: placeAddress
          };

          listOfPlaces.push(currentPlaceObj);

        }

      }

      // Set State to API info and call on swipe view component
      appComponent.setState({listOfPlaces: listOfPlaces}, function() {
        appComponent._toggleView("swipe");
      });


    })
    .catch(function (error) {
      console.log(error);
    });

  }


  // Determine which Component to render
  _renderSelectedView() {
    let selectedView;

    if (this.state.activeView == "select") {
      selectedView = <ViewSelect />;
    }
    else if (this.state.activeView == "cuisine") {
      selectedView = <ViewCuisine _searchSelectedCuisines={this._searchSelectedCuisines.bind(this)} />;
    }
    else if (this.state.activeView == "swipe") {
      selectedView = <ViewSwipe GOOGLE_API_KEY={this.state.GOOGLE_API_KEY} listOfPlaces={this.state.listOfPlaces} />;
    }
    else {
      selectedView = <ViewAbout />;
    }
    return selectedView;
  }


  // Render the actual UI
  render() {

    return (

      <Container>

        <AppHeader />

         <Container>
          { this._renderSelectedView() }
         </Container>

        <AppFooter
          _toggledFooter={this._toggleView.bind(this)}
        />

      </Container>

    );
  }
}
