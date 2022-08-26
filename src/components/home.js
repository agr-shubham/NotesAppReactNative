import React, {Component} from 'react';
import {Text, View, FlatList, Button} from 'react-native';
import Header from './header';
import NewNote from './newNote';
import NotesList from './notesList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [
        {
          id: 1,
          title: 'Title',
          content: 'Content',
        },
        {
          id: 2,
          title: 'Title2',
          content: 'Content2',
        },
      ],
      page: 'notesList',
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
    console.log(this.state.notes);
  };

  setPage = newText => {
    console.log(newText);
    if (newText === 'NewNote') {
      newid = ++this.autoid;
      this.state.notes.push({id: newid, title: '', content: ''});
      this.setPageEditNote(newid);
    } else {
      this.setState({page: 'notesList'});
    }
  };
  setPageEditNote = index => {
    console.log('D ' + index);
    this.editNoteId = index;
    this.setState({page: 'NewNote'});
  };
  render() {
    return (
      <View>
        <Header setPage={this.setPage} page={this.state.page} />
        {this.state.page === 'notesList' && (
          <>
            <NotesList
              notes={this.state.notes}
              setPage={this.setPage}
              setPageEditNote={this.setPageEditNote}
            />
          </>
        )}
        {this.state.page === 'NewNote' && (
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
