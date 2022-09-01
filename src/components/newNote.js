import React, {useState} from 'react';

import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
} from 'react-native';
import {newNote, removeNote, updateNote} from '../store/redux/notes';

function NewNote({route}) {
  const dispatch = useDispatch();
  console.log(route.params.id);

  const [id, setId] = useState(route.params.id);
  const [title, setTitleState] = useState(route.params.title);
  const [content, setContent] = useState(route.params.content);

  save = (id, title, content) => {
    dispatch(
      updateNote({
        id: id,
        title: title,
        content: content,
      }),
    );
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
