import React, {Component} from 'react';
import {Text, View, FlatList, Button, TextInput} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        {this.props.page==="NewNote" && (
        <Button
          onPress={() => {
            this.props.setPage("notesList");
          }}
          title="Back"
        />
        )}
        {this.props.page==="notesList" && (
        <Button
          onPress={() => {
            alert('Nav Button');
          }}
          title="Nav"
        />
        )}
        <Text>Notes</Text>
        <Button
          onPress={() => {
            this.props.setPage("NewNote");
          }}
          title="New"
        />
      </View>
    );
  }



}

export default Header;
