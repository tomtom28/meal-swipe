import React, { Component } from 'react';
import { Body, Container, Card, CardItem, Text } from 'native-base';

export default class ViewAbout extends Component {
  render() {
    return (
      <Container>
        <Card>
            <CardItem>
              <Body>
                <Text>
                   Step 1 - Add a *Cuisine* {"\n\n"}
                   Select from a list of cuisine options.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
                <Text>
                   Step 2 - *Swipe* Away {"\n\n"}
                   Swipe Right on places that look good. {"\n"}
                   Swipe Left on places that don't look so good.
                </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Step 3 - *Select* a Place {"\n\n"}
                   Select from your list of dining options.
                </Text>
              </Body>
            </CardItem>
          </Card>
      </Container>
    );
  }
}
