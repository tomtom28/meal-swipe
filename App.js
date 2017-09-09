import React, { Component } from 'react';
import { Body, Button, Card, CardItem, CheckBox, Container, Content, DeckSwiper, Footer, FooterTab, Header, Icon, Image, Left, ListItem, Text, Thumbnail, Title, View } from 'native-base';


const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./img/burger.png'),
  },
    {
    text: 'Card Two',
    name: 'Two',
    image: require('./img/burger.png'),
  },
    {
    text: 'Card Three',
    name: 'Three',
    image: require('./img/burger.png'),
  }
];




export default class App extends Component {
  render() {
    return (
      <Container>


        <Header>
          <Body>
            <Title>Meal Swipe</Title>
          </Body>
        </Header>




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



        <Footer>
          <FooterTab>
            <Button vertical >
              <Icon name="person" />
              <Text>About</Text>
            </Button>
            <Button vertical active>
              <Icon active name="pizza" />
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


      </Container>
    );
  }
}