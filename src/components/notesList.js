import React, {Component, useState} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';

function NotesList({navigation}) {
  const [notes, setNotes] = useState([]);
  const [editNoteId, setEditNoteId] = useState(0);
  const [autoid, setAutoid] = useState(3);

  console.log('list of notes:' + notes);

  function updateNote(id, title, content) {
    var index = notes.findIndex(item => item.id == id);

    console.log('index' + id);
    console.log('notesList:' + notes);
    setNotes(notes => {
      return [
        ...notes.slice(0, index),
        {
          id: id,
          title: title,
          content: content,
        },
        ...notes.slice(index + 1),
      ];
    });
  }

  function setPageEditNote(index) {
    setEditNoteId(index);
    //navigate to editNote
    console.log('editnoteid2 ' + index);
    console.log(notes);
    navigation.navigate('EditNote', {
      id: editNoteId,
      title: notes.find(item => item.id == index).title,
      content: notes.find(item => item.id == index).content,
      updateNote: updateNote,
    });
  }

  function setNewNote() {
    var newid = autoid;
    setEditNoteId(newid);
    setAutoid(autoid + 1);
    setNotes(notes => [...notes, {id: newid, title: '', content: ''}]);
    console.log('newid' + newid);
    navigation.navigate('EditNote', {
      id: newid,
      title: '',
      content: '',
      updateNote: updateNote,
    });
  }

  if (notes.length == 0) {
    console.log(':size 0');
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => {
                alert('Nav Button');
              }}>
              <Text style={styles.buttonText}>Nav</Text>
            </Pressable>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Notes</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={setNewNote} title="New">
              <Text style={styles.buttonText}>New</Text>
            </Pressable>
          </View>
        </View>
        <View>
          <Text style={{textAlign: 'center'}}>No Notes</Text>
        </View>
      </View>
    );
  } else {
    {
      console.log('hi');
    }
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => {
                alert('Nav Button');
              }}>
              <Text style={styles.buttonText}>Nav</Text>
            </Pressable>
          </View>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Notes</Text>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.button}
              onPress={() => {
                setNewNote;
              }}
              title="New">
              <Text style={styles.buttonText}>New</Text>
            </Pressable>
          </View>
        </View>
        <FlatList
          data={notes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.noteCard}>
              <Pressable onPress={setPageEditNote.bind(this, item.id)}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title === '' ? 'Untitled' : item.title}
                </Text>
                <Text style={styles.content} numberOfLines={1}>
                  {item.content === '' ? 'Blank' : item.content}
                </Text>
              </Pressable>
            </View>
          )}
        />
        <Text>Hi</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  noteCard: {
    padding: 5,
    borderBottomWidth: 2,
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
  },
  content: {
    fontSize: 19,
  },
  button: {
    height: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
  buttonContainer: {
    width: 80,
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    justifyContent: 'center',
  },
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black',
  },
  titleContainer: {
    justifyContent: 'center',
    backgroundColor: 'blue',
    flex: 1,
  },
  title: {
    color: 'white',
    paddingStart: 10,
    fontSize: 30,
  },
});

export default NotesList;
