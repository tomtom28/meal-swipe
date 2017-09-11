import React, { Component } from 'react';
import { Body, Button, CheckBox, Content, ListItem, Text } from 'native-base';

export default class ViewCuisine extends Component {

  // Track which Cuisines are selected
  constructor(props) {
    super(props);
    this.state = {
      selectedCuisines: [
        {
          name: "American",
          selected: false
        },
        {
          name: "Chinese",
          selected: false
        },
        {
          name: "French",
          selected: false
        },
        {
          name: "Indian",
          selected: false
        },
        {
          name: "Italian",
          selected: false
        },
        {
          name: "Mexican",
          selected: false
        },
        {
          name: "Seafood",
          selected: false
        },
        {
          name: "Thai",
          selected: false
        }
      ]
    };
  }


  // Toggle the selected cuisine (local to component)
  _toggleCuisine(name, boolean) {

    let selectedCuisines = this.state.selectedCuisines;

    for (let i=0; i<selectedCuisines.length; i++) {
      if (selectedCuisines[i].name == name) {
        selectedCuisines[i].selected = !boolean;
      }
    }

    this.setState({selectedCuisines: selectedCuisines});

  }

  // Submit current selection
  _submitSelection() {

    // Need to hold on to "this"
    let thisComponent = this;

    // Get cuisines and create string of parameters
    let cuisinesObjects = this.state.selectedCuisines;
    let cuisines = [];
    for (let i=0; i<cuisinesObjects.length; i++) {
      if (cuisinesObjects[i].selected) {
        cuisines.push(cuisinesObjects[i].name)
      }
    }
    cuisines = cuisines.join(",");


    // Get User Location and then pass parameters up to parent
    navigator.geolocation.getCurrentPosition(function(response) {
      let lat = response.coords.latitude;
      let lng = response.coords.longitude;
      let location = lat + "," + lng;
      thisComponent.props._searchSelectedCuisines(cuisines, location);
    });

  }


  render() {
    return (
      <Content>
        <ListItem itemHeader>
            <Text>Which cuisine(s) are you feeling today?</Text>
        </ListItem>

        {this.state.selectedCuisines.map(function(item, i) {

          return (
            <ListItem key={i} onPress={ () => this._toggleCuisine(item.name, item.selected)} >
              <CheckBox checked={item.selected} />
              <Body>
                <Text>{item.name}</Text>
              </Body>
            </ListItem>
          );

        }.bind(this))}

        <ListItem itemDivider />

        <Button block onPress={ () => this._submitSelection()}>
          <Text>Search</Text>
        </Button>

      </Content>
    );
  }
}
