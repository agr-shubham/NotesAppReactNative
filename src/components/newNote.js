import React, { Component } from 'react';
import { Text, View, FlatList, Button, TextInput } from 'react-native';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: "",
      content: ""
    }
      
  }

  setTitle = (newText) => {
    console.log(newText);
    this.setState({ title: newText });
  };

  setNote = (newText) => {
    console.log(newText);
    this.setState({ content: newText });
  };

  render() {
    return (
      <View>
       <TextInput
        placeholder='Title'
        onChangeText={newText => this.setTitle(newText)}/>
      <TextInput
        placeholder='Start typing here'
        onChangeText={newText => this.setNote(newText)}/>
      </View>
    );
  }
}

export default NewNote;