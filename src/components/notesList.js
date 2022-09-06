import React, {Component, useLayoutEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  Text,
  View,
  FlatList,
  Button,
  StyleSheet,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import {
  newNote,
  incrementId,
  updateNote,
  removeNote,
} from '../store/redux/notes';
import OptionsMenu from 'react-native-option-menu';
const MoreIcon = require('../png/more.png');

function NotesList({navigation}) {
  const notes = useSelector(state => state.notesList);
  const autoincId = useSelector(state => state.autoIncrementId);
  const dispatch = useDispatch();
  const [searchVisibility, setSearchVisibilty] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  console.log('list of notes:' + notes);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <View style={styles.buttonsRightContainer}>
            <View style={styles.buttonContainer}>
              <Pressable
                style={styles.button}
                onPress={toggleSearchVisibility}
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
      title: 'Notes',
    });
  });

  function toggleSearchVisibility() {
    if (searchVisibility) {
      setSearchText('');
    }
    setSearchVisibilty(!searchVisibility);
  }

  function setPageEditNote(itemid) {
    //navigate to editNote
    console.log(notes);
    navigation.navigate('EditNote', {
      id: itemid,
      title: notes.find(item => item.id == itemid).title,
      content: notes.find(item => item.id == itemid).content,
    });
  }

  function setNewNote() {
    console.log('setnewnote');
    var newid = autoincId;
    dispatch(incrementId());
    dispatch(newNote({id: newid}));
    console.log('newid' + newid);
    navigation.navigate('EditNote', {
      id: newid,
      title: '',
      content: '',
    });
  }

  function shareNote(item) {
    console.log('Share');
    var SendIntentAndroid = require('react-native-send-intent');
    console.log('Share');
    SendIntentAndroid.sendText({
      title: item.title,
      text: item.title + '\n' + item.content,
      type: SendIntentAndroid.TEXT_PLAIN,
    });
  }

  function deleteNote(id) {
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
        },
      },
    ]);
  }

  const searchOnChange = newText => {
    setSearchText(newText);
    console.log('newtext=' + newText);
    const filteredNotesTemp = notes.filter(
      note => note.title.includes(newText) || note.content.includes(newText),
    );
    setFilteredNotes(filteredNotesTemp);
    console.log('notes' + notes);
    console.log('filterednotes' + filteredNotesTemp);
  };

  if (
    notes.length == 0 ||
    (searchText.length != 0 && filteredNotes.length == 0)
  ) {
    console.log(':size 0');
    return (
      <View>
        {searchVisibility && (
          <TextInput
            style={styles.searchText}
            value={searchText}
            placeholder="Search"
            onChangeText={newText => searchOnChange(newText)}
          />
        )}
        <Text style={{textAlign: 'center'}}>No Notes</Text>
      </View>
    );
  } else {
    console.log('length' + searchText.length);
    return (
      <View>
        {searchVisibility && (
          <TextInput
            style={styles.searchText}
            value={searchText}
            placeholder="Search"
            onChangeText={newText => searchOnChange(newText)}
          />
        )}
        <FlatList
          data={
            searchText.length == 0
              ? notes
                  .slice()
                  .sort((a, b) =>
                    b.updateTime
                      .toString()
                      .localeCompare(a.updateTime.toString()),
                  )
              : filteredNotes
                  .slice()
                  .sort((a, b) =>
                    b.updateTime
                      .toString()
                      .localeCompare(a.updateTime.toString()),
                  )
          }
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
              <View style={styles.optionsMenuButtonContainer}>
                <OptionsMenu
                  button={MoreIcon}
                  buttonStyle={{
                    width: 30,
                    height: 20,
                    alignItems: 'center',
                    justifyContent: 'center',
                    resizeMode: 'contain',
                  }}
                  options={['Delete', 'Share', 'Cancel']}
                  actions={[
                    deleteNote.bind(this, item.id),
                    shareNote.bind(this, item),
                  ]}
                />
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
    width: '90%',
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
  optionsMenuButtonContainer: {
    alignContent: 'center',
    justifyContent: 'center',
    borderStartWidth: 1,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});

export default NotesList;
