import React, { Component } from 'react';
import { Button, Footer, FooterTab, Icon, Text } from 'native-base';


export default class AppFooter extends Component {

  render() {
    return (
      <Footer>
        <FooterTab>

          <Button active={ (this.props._activeView == "about") } onPress={ () => this.props._toggledFooter("about")} >
            <Icon active={ (this.props._activeView == "about") } name="person" />
            <Text>About</Text>
          </Button>

          <Button active={ (this.props._activeView == "cuisine") } onPress={ () => this.props._toggledFooter("cuisine")} >
            <Icon active={ (this.props._activeView == "cuisine") } name="pizza" />
            <Text>Cuisine</Text>
          </Button>

          <Button active={ (this.props._activeView == "swipe") } onPress={ () => this.props._toggledFooter("swipe")} >
            <Icon active={ (this.props._activeView == "swipe") } name="speedometer" />
            <Text>Swipe</Text>
          </Button>

          <Button active={ (this.props._activeView == "select") } onPress={ () => this.props._toggledFooter("select")} >
            <Icon active={ (this.props._activeView == "select") } name="bulb" />
            <Text>Select</Text>
          </Button>

        </FooterTab>
      </Footer>
    );
  }
}
