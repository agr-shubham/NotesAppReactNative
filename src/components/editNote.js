import React, {useState, useLayoutEffect} from 'react';

import {useDispatch} from 'react-redux';
import {View, TextInput, StyleSheet, Pressable, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {removeNote, updateNote} from '../store/redux/notes';

function EditNote({route, navigation}) {
  const dispatch = useDispatch();
  console.log(route.params.id);

  const [id] = useState(route.params.id);
  const [title, setTitleState] = useState(route.params.title);
  const [content, setContent] = useState(route.params.content);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={deleteNote}
              title="Delete">
              <Ionicons name="trash-outline" color="white" size={30} />
            </Pressable>
          </View>
        );
      },
      title: 'Notes',
    });
  });

  function deleteNote() {
    Alert.alert('Delete', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          dispatch(removeNote({id: id}));
          navigation.goBack();
        },
      },
    ]);
  }

  function save(_id, _title, _content) {
    dispatch(
      updateNote({
        id: _id,
        title: _title,
        content: _content,
      }),
    );
  }

  function setTitle(newText) {
    setTitleState(newText);
    save(id, newText, content);
  }

  function setNote(newText) {
    setContent(newText);
    save(id, title, newText);
  }

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
  button: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
  },
  buttonContainer: {
    color: 'black',
  },
});

export default EditNote;
