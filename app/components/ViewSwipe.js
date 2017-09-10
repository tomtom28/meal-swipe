import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import axios from 'axios';


import SwipeImage from './SwipeImage';


export default class ViewSwipe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfPlaces: this.props.listOfPlaces,
      currentPlace: 0
    };
  }


  componentDidUpdate() {
    // Alert User that they swiped through everything
    if (this.state.currentPlace == 0) {
      console.log("Repeating list");
    }
  }


  // Add Right swiped place to user's list
  _saveRightSwipe(rightSwipedPlaceLocation) {
    let rightSwipedPlace = this.state.listOfPlaces[rightSwipedPlaceLocation];
    this.props._pushToListOfUserSelections(rightSwipedPlace);
  }


  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={this.state.listOfPlaces}

            // Increment place counter on any swipe
            // Note that Mod (%) is used because the card deck repeats
            onSwipeLeft={ () => this.setState({currentPlace: ( (this.state.currentPlace+1) % this.state.listOfPlaces.length ) }) }
            onSwipeRight={ () => this.setState({currentPlace: ( (this.state.currentPlace+1) % this.state.listOfPlaces.length ) }, () => this._saveRightSwipe(this.state.currentPlace) ) }

            // Render All Dining Options
            renderItem={ (item) =>
              <Card style={{ elevation: 3 }} >
                <CardItem>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{ Number.isInteger(item.rating) ? (item.rating + ".0") : item.rating} Rating</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                  {/* Be aware that each image needs a unique key to track state properly */}
                  <SwipeImage key={item.name} GOOGLE_API_KEY={this.props.GOOGLE_API_KEY} photoRef={item.photoRef} />
                </CardItem>
                <CardItem>
                  <Icon name="navigate" />
                  <Text>{item.address}</Text>
                </CardItem>
              </Card>
            }

          />
        </View>
      </Container>
    );
  }
}
