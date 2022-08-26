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
    console.log(this.props.id);
    console.log(this.props.notes);

    console.log(this.props.notes.find(item => item.id == this.props.id).title);
    this.state = {
      id: this.props.id,
      title: this.props.notes.find(item => item.id == this.props.id).title,
      content: this.props.notes.find(item => item.id == this.props.id).content,
    };
  }

  componentDidMount() {}

  save(id, title, content) {
    this.props.updateNote(id, title, content);
  }

  setTitle = newText => {
    console.log(newText);
    this.setState({title: newText});
    this.save(this.state.id, newText, this.state.content);
  };

  setNote = newText => {
    console.log(newText);
    this.setState({content: newText});
    this.save(this.state.id, this.state.title, newText);
  };

  render() {
    return (
      <View style={styles.newNoteContainer}>
        <View style={styles.noteTitleContainer}>
          <TextInput
            style={styles.titleText}
            placeholder="Title"
            onChangeText={newText => this.setTitle(newText)}
            value={this.state.title}
          />
        </View>
        <View style={styles.noteContentContainer}>
          <TextInput
            style={styles.contentText}
            placeholder="Start typing here"
            multiline={true}
            onChangeText={newText => this.setNote(newText)}
            value={this.state.content}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  newNoteContainer: {
    flexDirection: 'column',
  },
  noteContentContainer: {
    justifyContent: 'center',
  },
  noteTitleContainer: {
    height: 60,
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  contentText: {
    fontSize: 19,
  },
});

export default NewNote;
