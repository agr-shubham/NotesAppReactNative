import React, {Component, useState} from 'react';
import {Text, View, FlatList, Button, StatusBar} from 'react-native';
import EditNote from './editNote';
import NotesList from './notesList';
import {notesListPage, newNotePage} from '../util/constants';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from '../store/redux/store';

const Stack = createNativeStackNavigator();

function Home() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#6200EE'},
              headerTintColor: 'white',
              headerTitleAlign: 'center',
            }}>
            <Stack.Screen name="NotesList" component={NotesList} />
            <Stack.Screen name="EditNote" component={EditNote} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}

export default Home;
