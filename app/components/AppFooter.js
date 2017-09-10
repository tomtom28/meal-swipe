import React, { Component } from 'react';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';


export default class AppFooter extends Component {

  render() {
    return (
      <Footer>
        <FooterTab>

          <Button onPress={ () => this.props._toggledFooter("about")} >
            <Icon name="person" />
            <Text>About</Text>
          </Button>

          <Button onPress={ () => this.props._toggledFooter("cuisine")} >
            <Icon name="pizza" />
            <Text>Cuisine</Text>
          </Button>

          <Button onPress={ () => this.props._toggledFooter("swipe")} >
            <Icon name="speedometer" />
            <Text>Swipe</Text>
          </Button>

          <Button onPress={ () => this.props._toggledFooter("select")} >
            <Icon name="bulb" />
            <Text>Select</Text>
          </Button>

        </FooterTab>
      </Footer>
    );
  }
}