import React, {Component, useLayoutEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  View,
  FlatList,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';
import {newNote, removeNote, updateNote} from '../store/redux/notes';
import OptionsMenu from './optionsMenu';

function NotesList({navigation}) {
  const notes = useSelector(state => state.notesList.notesList);
  const dispatch = useDispatch();

  const [editNoteId, setEditNoteId] = useState(0);
  const [autoid, setAutoid] = useState(3);

  console.log('list of notes:' + notes);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.buttonsRightContainer}>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={() => {
                  alert('Search');
                }}
                title="Search">
                <Text style={styles.buttonText}>Search</Text>
              </Pressable>
            </View>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={setNewNote} title="New">
                <Text style={styles.buttonText}>New</Text>
              </Pressable>
            </View>
          </View>
        );
      },
      headerLeft: () => {
        return (
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => {
                alert('Nav Button');
              }}>
              <Text style={styles.buttonText}>Nav</Text>
            </Pressable>
          </View>
        );
      },
      title: 'Notes',
    });
  });

  function setPageEditNote(index) {
    setEditNoteId(index);
    //navigate to editNote
    console.log('editnoteid2 ' + index);
    console.log(notes);
    navigation.navigate('EditNote', {
      id: editNoteId,
      title: notes.find(item => item.id == index).title,
      content: notes.find(item => item.id == index).content,
    });
  }

  function setNewNote() {
    console.log('setnewnote');
    var newid = autoid;
    setEditNoteId(newid);
    setAutoid(autoid + 1);
    dispatch(newNote({id: newid}));
    console.log('newid' + newid);
    navigation.navigate('EditNote', {
      id: newid,
      title: '',
      content: '',
    });
  }

  if (notes.length == 0) {
    console.log(':size 0');
    return (
      <View>
        <Text style={{textAlign: 'center'}}>No Notes</Text>
      </View>
    );
  } else {
    return (
      <View>
        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.noteCardContainer}>
              <View style={styles.noteCard}>
                <Pressable onPress={setPageEditNote.bind(this, item.id)}>
                  <Text style={styles.title} numberOfLines={1}>
                    {item.title === '' ? 'Untitled' : item.title}
                  </Text>
                  <Text style={styles.content} numberOfLines={1}>
                    {item.content === '' ? 'Blank' : item.content}
                  </Text>
                  <Text style={styles.lastModified} numberOfLines={1}>
                    Last Modified:{' '}
                    {new Date(JSON.parse(item.updateTime)).toLocaleDateString()}{' '}
                    {new Date(JSON.parse(item.updateTime)).toLocaleTimeString()}
                  </Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noteCard: {
    width: '100%',
    padding: 5,
    borderWidth: 1,
  },
  noteCardContainer: {
    flexDirection: 'row',
  },
  noteContentContainer: {
    justifyContent: 'center',
  },
  noteTitleContainer: {
    height: 60,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  content: {
    fontSize: 19,
  },
  lastModified: {
    fontSize: 15,
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
  buttonsRightContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    color: 'black',
    flexDirection: 'row',
    marginStart: 10,
  },
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
  },
  optionsContainer: {
    borderBottomWidth: 1,
  },
});

export default NotesList;
