import React, { Component } from 'react';
import { Body, CheckBox, Content, ListItem, Text } from 'native-base';

export default class ViewCuisine extends Component {
  render() {
    return (
      <Content>
        <ListItem itemHeader>
            <Text>Which cuisine(s) are you feeling today?</Text>
          </ListItem>
        <ListItem>
          <CheckBox checked={true} />
          <Body>
            <Text>American</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Chinese</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Indian</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Mexican</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Sushi</Text>
          </Body>
        </ListItem>
        <ListItem>
          <CheckBox checked={false} />
          <Body>
            <Text>Thai</Text>
          </Body>
        </ListItem>
      </Content>
    );
  }
}