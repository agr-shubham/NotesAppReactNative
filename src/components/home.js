import React, {Component} from 'react';
import {Text, View, FlatList, Button} from 'react-native';
import Header from './header';
import NewNote from './newNote';
import NotesList from './notesList';
import {notesListPage, newNotePage} from '../util/Constants';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      page: notesListPage,
    };
  }
  editNoteId = 0;
  autoid = 3;

  updateNote = (id, title, content) => {
    index = this.state.notes.findIndex(item => item.id == id);
    this.state.notes[index] = {
      id: id,
      title: title,
      content: content,
    };
  };

  setPage = newText => {
    if (newText === newNotePage) {
      newid = ++this.autoid;
      this.state.notes.push({id: newid, title: '', content: ''});
      this.setPageEditNote(newid);
    } else {
      this.setState({page: notesListPage});
    }
  };
  setPageEditNote = index => {
    this.editNoteId = index;
    this.setState({page: newNotePage});
  };

  render() {
    return (
      <View>
        <Header setPage={this.setPage} page={this.state.page} />
        {this.state.page === notesListPage && (
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
        )}
      </View>
    );
  }
}

export default Home;
