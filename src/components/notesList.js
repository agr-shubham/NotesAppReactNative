import React, { Component } from 'react';
import { Text, View, FlatList, Button } from 'react-native';

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["hi","hello"],    
    }
      
  }
  render() {
    return (
      <View>
      <FlatList
        data={this.state.notes}
        renderItem={({item}) => <Text>{item}</Text>}
      />
      </View>
    );
  }
}

export default NotesList;