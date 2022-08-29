import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
} from 'react-native';
import {notesListPage, newNotePage} from '../util/constants';

function Header(props) {
  return (
    <View style={styles.headerContainer}>
      {props.page === newNotePage && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              props.setPage(notesListPage);
            }}
            title="Back">
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>
        </View>
      )}
      {props.page === notesListPage && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              alert('Nav Button');
            }}>
            <Text style={styles.buttonText}>Nav</Text>
          </Pressable>
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Notes</Text>
      </View>
      {props.page === notesListPage && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              props.setPage(newNotePage);
            }}
            title="New">
            <Text style={styles.buttonText}>New</Text>
          </Pressable>
        </View>
      )}
      {props.page === newNotePage && (
        <View style={styles.buttonContainer}>
          <Pressable
            style={styles.button}
            onPress={() => {
              props.setPage(notesListPage);
              alert('Deleted');
            }}
            title="Delete">
            <Text style={styles.buttonText}>Delete</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
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
export default Header;
