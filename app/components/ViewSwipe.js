import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
import axios from 'axios';


import SwipeImage from './SwipeImage';


export default class ViewSwipe extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={this.props.listOfPlaces}

            // Render All Dining Options
            renderItem={ (item) =>
              <Card style={{ elevation: 3 }}>
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
