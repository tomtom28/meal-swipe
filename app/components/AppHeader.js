import React, { Component } from 'react';
import { Body, Header, Title } from 'native-base';

export default class AppHeader extends Component {
  render() {
    return (
      <Header>
        <Body>
          <Title>Meal Swipe</Title>
        </Body>
      </Header>
    );
  }
}