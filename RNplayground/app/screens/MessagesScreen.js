//import liraries
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/ListItem';
import MySafeAreaView from '../components/MySafeAreaView';
import colors from '../config/colors';
import ListItemSeperator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';


const initialMessages = [
  {
    id: 1,
    title: 'Eric Lantz',
    description: 'Hey, is this item still available?',
    image: require('../assets/mosh.jpg')
  },
  {
    id: 2,
    title: 'Eric Lantz',
    description: "I'm interested in this item. When will you be able to post it?",
    image: require('../assets/mosh.jpg')
  }
]
// create a component
const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages)
  const [refreshing, setRefreshing] = useState(false)

  const handleDelete = message => {
    //Delete the message from messages
    setMessages(messages.filter(m => m.id !== message.id))
  }
  return (
    <MySafeAreaView>
    <FlatList
      data={messages}
      keyExtractor={message => message.id.toString()}
      renderItem={({item}) => 
      <ListItem 
      title={item.title}
      subTitle={item.description}
      image={item.image}
      onPress={() => console.log('message selected', item)}
      renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)}/>}
      />
    }
    ItemSeparatorComponent={ListItemSeperator}
    refreshing={refreshing}
    onRefresh={() => setMessages([
      {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/mosh.jpg')
      }
    ])}
    />
    </MySafeAreaView>
  );
};
const styles = StyleSheet.create({
  
})

//make this component available to the app
export default MessagesScreen;