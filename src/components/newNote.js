import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
    };
  }

  setTitle = newText => {
    console.log(newText);
    this.setState({title: newText});
  };

  setNote = newText => {
    console.log(newText);
    this.setState({content: newText});
  };

  render() {
    return (
      <View style={styles.newNoteContainer}>
        <View style={styles.noteTitleContainer}>
          <TextInput
          style={styles.titleText}
            placeholder="Title"
            onChangeText={newText => this.setTitle(newText)}
          />
        </View>
        <View style={styles.noteContentContainer}>
          <TextInput
          style={styles.contentText}
          placeholder="Start typing here"
          multiline={true}
          onChangeText={newText => this.setNote(newText)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    newNoteContainer:{
        flexDirection:'column'
    },
    noteContentContainer: {
        justifyContent: 'center',
      },
    noteTitleContainer: {
    height: 60
  },
  titleText:{
    fontSize:25,
    fontWeight:'bold'
  },
  contentText:{
    fontSize:19
  }
});

export default NewNote;
