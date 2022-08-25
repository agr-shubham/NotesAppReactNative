import React, { Component } from 'react';
import { Text, View, FlatList, Button, StyleSheet } from 'react-native';

class NotesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
            "title":"Title",
            "content":"Content"
        },
        {
            "title":"Title2",
            "content":"Content2"
        }
    ],    
    }
      
  }
  render() {
    return (
      <View>
      <FlatList
        data={this.state.notes}
        keyExtractor={item => item.title.toString()}
        renderItem={({item}) => <View style={styles.noteCard}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.content}>{item.content}</Text>
        </View>
    }
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    noteCard:{
        borderBottomWidth:2
    },
    noteContentContainer: {
        justifyContent: 'center',
      },
    noteTitleContainer: {
    height: 60
  },
  title:{
    fontSize:25,
    fontWeight:'bold'
  },
  content:{
    fontSize:19
  }
});

export default NotesList;