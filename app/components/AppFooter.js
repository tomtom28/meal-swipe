import React, { Component } from 'react';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux'; 

export default class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>

          <Button onPress={() => Actions.about()} >
            <Icon name="person" />
            <Text>About</Text>
          </Button>

          <Button onPress={() => Actions.cuisine()} >
            <Icon name="pizza" />
            <Text>Cuisine</Text>
          </Button>

          <Button onPress={() => Actions.swipe()} >
            <Icon name="speedometer" />
            <Text>Swipe</Text>
          </Button>

          <Button onPress={() => Actions.select()} >
            <Icon name="bulb" />
            <Text>Select</Text>
          </Button>

        </FooterTab>
      </Footer>
    );
  }
}