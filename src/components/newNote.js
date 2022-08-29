import React, {useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';

function NewNote(props) {
  console.log(props.notes);
  console.log(props.id);

  const [id, setId] = useState(props.id);
  const [title, setTitleState] = useState(
    props.notes.find(item => item.id == props.id).title,
  );
  const [content, setContent] = useState(
    props.notes.find(item => item.id == props.id).content,
  );

  save = (id, title, content) => {
    props.updateNote(id, title, content);
  };

  setTitle = newText => {
    setTitleState(newText);
    save(id, newText, content);
  };

  setNote = newText => {
    setContent(newText);
    save(id, title, newText);
  };

  return (
    <View style={styles.newNoteContainer}>
      <View style={styles.noteTitleContainer}>
        <TextInput
          style={styles.titleText}
          placeholder="Title"
          onChangeText={newText => setTitle(newText)}
          value={title}
        />
      </View>
      <View style={styles.noteContentContainer}>
        <TextInput
          style={styles.contentText}
          placeholder="Start typing here"
          multiline={true}
          onChangeText={newText => setNote(newText)}
          value={content}
        />
      </View>
    </View>
  );
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
