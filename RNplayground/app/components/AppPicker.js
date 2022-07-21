import { StyleSheet, FlatList, TextInput, View,TouchableWithoutFeedback, Modal, Button } from 'react-native'
import { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import React from 'react'
import MySafeAreaView from './MySafeAreaView'
import PickerItem from './PickerItem'
import colors from '../config/colors'

const AppPicker = ({icon, items, placeholder, onSelectItem, selectedItem}) => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons
        name={icon}
        size={20}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />}
      {selectedItem ? (
      <AppText style={styles.text}>{selectedItem.label}</AppText> ) : 
      (<AppText style={[styles.text, {color: defaultStyles.colors.medium}]}>{placeholder}</AppText>)}
      <MaterialCommunityIcons
        name='chevron-down'
        size={20}
        color={defaultStyles.colors.medium}/>
    </View>
    </TouchableWithoutFeedback>
    <Modal visible={modalVisible} animationType="slide">
      <MySafeAreaView>
        <Button title='Close' onPress={() => setModalVisible(false)}/>
        <FlatList
          data={items}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({item}) => 
          <PickerItem 
            label={item.label}
            onPress={() => {
              setModalVisible(false)
              onSelectItem(item)
            }}
            />
          }
          />
      </MySafeAreaView>
    </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,  
    marginVertical: 10
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  }
})

export default AppPicker