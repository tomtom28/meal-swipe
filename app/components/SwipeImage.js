import React, { Component } from 'react';
import { Image } from 'react-native';
import axios from 'axios';


// Import Images
const imgLoadingGif = require('../img/loading.gif');
const imgPlaceholder = require('../img/burger.png');
const imgAlert = require('../img/alert.png');
const imgDanger = require('../img/danger.png');
const imgDefault = require('../img/cutlery.png');


export default class SwipeImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      IMAGE: imgLoadingGif
    };
  }

  componentWillMount() {

    // Get photo reference
    photoRef = this.props.photoRef;

    // Need to hold on to "this"
    let swipeComponent = this;

    // Null (i.e. user skipped a step)
    if (photoRef == null) {
      swipeComponent.setState({IMAGE: imgDanger});
    }
    // No photo because no places found
    else if (photoRef == "n/a") {
      swipeComponent.setState({IMAGE: imgAlert});
    }
    // No photo but real place
    else if (photoRef == "none") {
      swipeComponent.setState({IMAGE: imgDefault});
    }
    // Has photo, so hit Google API
    else {

      // Make a request for a user with a given ID
      axios.get('https://maps.googleapis.com/maps/api/place/photo?', {
          params: {
            maxwidth: 256,
            photoreference: photoRef,
            key: swipeComponent.props.GOOGLE_API_KEY,
          }
        })
        .then(function (response) {
        // Set image to Google Places image URL
        swipeComponent.setState({IMAGE: {uri: response.request.responseURL} });
        })
        .catch(function (error) {
          // Some kind of API issue, just render the defualt image and move on with life
          console.log(error);
          swipeComponent.setState({IMAGE: imgDefault});
        });

    }

  }

  render() {
    return (
      <Image style={{ height: 350, flex: 1 }} source={this.state.IMAGE} />
    );
  }
}
