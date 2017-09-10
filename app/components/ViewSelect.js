import React, { Component } from 'react';
import { ListView, StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Icon, Left, List, ListItem, Text } from 'native-base';


// const datas = [
//   'Simon Mignolet',
//   'Nathaniel Clyne',
//   'Dejan Lovren',
//   'Mama Sakho',
//   'Alberto Moreno',
//   'Emre Can',
//   'Joe Allen',
//   'Phil Coutinho',
// ];

let datas = ["No places yet! Please swipe right on a few."];

const styles = StyleSheet.create({
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20
  }
});


export default class ViewSelect extends Component {

  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      basic: true,
      listViewData: datas,
    };
  }


  componentWillMount() {
    let listOfUserSelections = this.props.listOfUserSelections;
    console.log("list: " + listOfUserSelections);

    // Just get place names for now (if they are any)
    if (listOfUserSelections.length > 0) {
      datas = [];
    }
    for (let i=0; i<listOfUserSelections.length; i++ ) {
      datas.push(listOfUserSelections[i].name);
    }

  }


  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.state.listViewData];
    newData.splice(rowId, 1);
    this.setState({ listViewData: newData });
  }

  render() {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Content>

          <List>
             <ListItem itemHeader>
                <Text style={ styles.listTitle } >Where will it be?</Text>
            </ListItem>
          </List>

          <List
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem>
                <Text> {"   "} {data} </Text>
              </ListItem>}
            renderLeftHiddenRow={data =>
              <Button full onPress={() => alert(data)}>
                <Icon active name="information-circle" />
              </Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            leftOpenValue={75}
            rightOpenValue={-75}
          />
        </Content>
      </Container>
    );
  }

}
