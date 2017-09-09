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
                   Step 1 {"\n"}
                   Select from a list of cuisine options.
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
                <Text>
                   Step 2 {"\n"}
                   Swipe Right on places that like good. {"\n"}
                   Swipe Left on places that don't look so good.
                </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
                <Text>
                   Step 3 {"\n"}
                   Select from your list of dining options.
                </Text>
              </Body>
            </CardItem>
          </Card>
      </Container>
    );
  }
}