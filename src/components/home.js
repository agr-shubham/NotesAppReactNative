import React, { Component } from 'react';
import { Text, View, FlatList, Button } from 'react-native';
import Header from './header';
import NewNote from './newNote';
import NotesList from './notesList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: ["hi","hello"],
      page:"noteList"    
    }
      
  }

  setPage = (newText) => {
    console.log(newText);
    this.setState({ page: newText });
  };
  render() {
    return (
      <View>
        <Header setPage={this.setPage}
          page={this.state.page}
        />
        { this.state.page==="notesList" && (
                <>
                  
        <NotesList/>
                </>
        )
        }
        { this.state.page==="NewNote" && (
                <>
                  
        <NewNote/>
                </>
        )
        }
      </View>
    );
  }
}

export default Home;