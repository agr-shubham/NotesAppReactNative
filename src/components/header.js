import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.headerContainer}>
        {this.props.page === 'NewNote' && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.props.setPage('notesList');
              }}
              title="Back"
            >
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
          </View>
        )}
        {this.props.page === 'notesList' && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                alert('Nav Button');
              }}
            >
                <Text style={styles.buttonText}>Nav</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Notes</Text>
        </View>
        {this.props.page === 'notesList' && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.button}
            onPress={() => {
              this.props.setPage('NewNote');
            }}
            title="New"
          >
            <Text style={styles.buttonText}>New</Text>
          </TouchableOpacity>
        </View>
        )}
        {this.props.page === 'NewNote' && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity
              style={styles.button}
            onPress={() => {
              this.props.setPage('notesList');
              alert('Deleted');
            }}
            title="Delete"
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        </View>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
    button:{
        height: "100%",
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        color:'white',
        fontSize:20
    },
  buttonContainer: {
    width: 80,
    height: '100%',
    borderWidth: 2,
    borderColor: 'black',
    color: 'black',
    justifyContent: 'center'
  },
  headerContainer: {
    height: 70,
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: 'black'
  },
  titleContainer: {
    justifyContent: 'center',
    backgroundColor:'blue',
    flex:1
  },
  title:{
    color:'white',
    paddingStart:10,
    fontSize:30
  },
});
export default Header;
