//import libraries
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';
import ListItemSeperator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';


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
    <Screen>
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
    </Screen>
  );
};
const styles = StyleSheet.create({
  
})

//make this component available to the app
export default MessagesScreen;