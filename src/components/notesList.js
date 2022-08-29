import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';

function NotesList(props) {
  if (props.notes.length == 0) {
    return <Text>No notes</Text>;
  } else {
    return (
      <View>
        <FlatList
          data={props.notes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.noteCard}>
              <Pressable onPress={props.setPageEditNote.bind(this, item.id)}>
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
});

export default NotesList;
