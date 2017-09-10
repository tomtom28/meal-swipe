import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

const imgPlaceholder = require('../img/burger.png');


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
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{ Number.isInteger(item.rating) ? (item.rating + ".0") : item.rating} Rating</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 350, flex: 1 }} source={imgPlaceholder} />
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
