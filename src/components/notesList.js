import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  Button,
  StyleSheet,
  Pressable,
} from 'react-native';

class NotesList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <FlatList
          data={this.props.notes}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.noteCard}>
              <Pressable
                onPress={this.props.setPageEditNote.bind(this, item.id)}>
                <Text style={styles.title} numberOfLines={1}>
                  {item.title}
                </Text>
                <Text style={styles.content} numberOfLines={1}>
                  {item.content}
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
