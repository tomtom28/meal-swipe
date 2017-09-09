import React, { Component } from 'react';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';

export default class AppFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Button vertical active>
            <Icon active name="person" />
            <Text>About</Text>
          </Button>
          <Button vertical>
            <Icon name="pizza" />
            <Text>Cuisine</Text>
          </Button>
          <Button vertical>
            <Icon name="speedometer" />
            <Text>Swipe</Text>
          </Button>
          <Button vertical>
            <Icon name="bulb" />
            <Text>Select</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}