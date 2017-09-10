import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const imgPlaceholder = require('../img/burger.png');
const imgAlert = require('../img/alert.png');
const imgDanger = require('../img/danger.png');
const imgDefault = require('../img/cutlery.png');


export default class ViewSwipe extends Component {

  constructor(props) {
    super(props);
  }

  _showImage(photoRef) {

    // Null (i.e. user skipped a step)
    if (photoRef == null) {
      return imgDanger;
    }
    // No photo because no places found
    else if (photoRef == "n/a") {
      return imgAlert;
    }
    // No photo but real place
    else if (photoRef == "none") {
      return imgDefault;
    }
    // Has Photo, so hit Google API
    else {
      return imgPlaceholder;
    }

  }

  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={this.props.listOfPlaces}

            // Render All Dining Options
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{ Number.isInteger(item.rating) ? (item.rating + ".0") : item.rating} Rating</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 350, flex: 1 }} source={this._showImage(item.photoRef)} />
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
