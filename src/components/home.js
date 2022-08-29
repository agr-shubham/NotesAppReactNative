import React, {Component, useState} from 'react';
import {Text, View, FlatList, Button} from 'react-native';
import Header from './header';
import NewNote from './newNote';
import NotesList from './notesList';
import {notesListPage, newNotePage} from '../util/constants';

function Home(props) {
  const [notes, setNotes] = useState([]);
  const [page, setPageState] = useState(notesListPage);
  const [editNoteId, setEditNoteId] = useState(0);
  const [autoid, setAutoid] = useState(3);

  updateNote = (id, title, content) => {
    index = notes.findIndex(item => item.id == id);
    setNotes(notes => {
      return [
        ...notes.slice(0, index),
        {
          id: id,
          title: title,
          content: content,
        },
        ...notes.slice(index + 1),
      ];
    });
  };

  setPage = newText => {
    if (newText === newNotePage) {
      newid = autoid;
      setAutoid(autoid + 1);
      setNotes(notes => [...notes, {id: newid, title: '', content: ''}]);
      setPageEditNote(newid);
    } else {
      setPageState(notesListPage);
    }
  };
  setPageEditNote = index => {
    setEditNoteId(index);
    setPageState(newNotePage);
  };

  return (
    <View>
      <Header setPage={setPage} page={page} />
      {page === notesListPage && (
        <>
          <NotesList notes={notes} setPageEditNote={setPageEditNote} />
        </>
      )}
      {page === newNotePage && (
        <>
          <NewNote notes={notes} id={editNoteId} updateNote={updateNote} />
        </>
      )}
    </View>
  );
}

export default Home;
