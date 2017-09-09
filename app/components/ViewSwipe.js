import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';


const cards = [
  {
    name: 'Place One',
    rating: '4.7',
    image: require('../img/burger.png'),
    location: '300 Main Street, Edison'
  },
  {
    name: 'Place Two',
    rating: '3.1',
    image: require('../img/burger.png'),
    location: '1221 7th Ave, NYC'
  },
  {
    name: 'Place Three',
    rating: '2.3',
    image: require('../img/burger.png'),
    location: '920 Stone Road, Palo Alto'
  },

];


export default class ViewSwipe extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}

            // Render All Dining Options
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                    <Body>
                      <Text>{item.name}</Text>
                      <Text note>{item.rating} Rating</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 350, flex: 1 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name="navigate" />
                  <Text>{item.location}</Text>
                </CardItem>
              </Card>
            }

          />
        </View>
      </Container>
    );
  }
}
