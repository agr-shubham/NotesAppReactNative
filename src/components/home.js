import React, {Component, useState} from 'react';
import {Text, View, FlatList, Button, StatusBar} from 'react-native';
import NewNote from './newNote';
import NotesList from './notesList';
import {notesListPage, newNotePage} from '../util/constants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <>
      {/* <StatusBar style="dark" /> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="NotesList" component={NotesList} />
          <Stack.Screen name="EditNote" component={NewNote} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* {this.state.page === notesListPage && (
          <>
            <NotesList
              notes={this.state.notes}
              setPageEditNote={this.setPageEditNote}
            />
          </>
        )}
        {this.state.page === newNotePage && (
          <>
            <NewNote
              notes={this.state.notes}
              id={this.editNoteId}
              updateNote={this.updateNote}
            />
          </>
        )} */}
    </>
  );
}

export default Home;
